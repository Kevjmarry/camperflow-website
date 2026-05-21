import Stripe from 'stripe';
import { NextRequest } from 'next/server';

const PRICE_IDS: Record<string, string> = {
  starter: 'price_1TZXTPIhm4YI8m30XpwGR05g',
  core:    'price_1TZXVCIhm4YI8m306ZWJWBfu',
  growth:  'price_1TZXXpIhm4YI8m308GZATyhu',
  pro:     'price_1TZXZRIhm4YI8m308YOwthl4',
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const plan = (body.plan as string)?.toLowerCase();

  if (!plan || !PRICE_IDS[plan]) {
    return Response.json({ error: 'Invalid plan' }, { status: 400 });
  }

  const origin = req.headers.get('origin') ?? 'https://camperflow.io';

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: PRICE_IDS[plan], quantity: 1 }],
      success_url: `https://app.camperflow.io/en/signup?plan=${plan}`,
      cancel_url: `${origin}/en/pricing`,
    });
  } catch (err) {
    const isDev = process.env.NODE_ENV === 'development';
    const isStripe = err instanceof Stripe.errors.StripeError;
    console.error('[checkout] Stripe error:', err);
    return Response.json(
      isDev
        ? {
            error: isStripe ? err.message : String(err),
            ...(isStripe && { type: err.type, code: err.code, status: err.statusCode }),
          }
        : { error: 'Checkout unavailable' },
      { status: isStripe ? (err.statusCode ?? 500) : 500 },
    );
  }

  return Response.json({ url: session.url });
}
