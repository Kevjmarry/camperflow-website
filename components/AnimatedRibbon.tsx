interface Props {
  className?: string;
}

/*
 * Full-page sinusoidal ribbon — viewBox 0 0 100 1000, preserveAspectRatio="none".
 * Animation: CSS opacity keyframes on each path layer (see globals.css .rp--* rules).
 * No path geometry moves; only per-layer opacity oscillates to simulate surface twist.
 *
 * Key design principles vs. previous version:
 *
 * LAYER ORDER (painter, back→front):
 *   atm → wide → main → sheen → cyan → rim
 *
 * DIAGONAL CONTROL POINTS — ctrl vectors offset in both X and Y so curves
 *   approach their extremes at an angle ("flowing fabric" not "road stripe").
 *
 * SVG feGaussianBlur in SVG coordinate space — filterUnits="userSpaceOnUse"
 *   with generous absolute regions so blur output is never clipped.
 *   On 1440 px wide viewport: 1 SVG unit ≈ 14.4 px.
 *
 * C1-continuous junctions (ctrl_out = 2×J − ctrl_in):
 *   atm  (12,240): (8,172)→(16,308)   (88,490): (90,392)→(86,588)   (12,745): (10,668)→(14,822)
 *   wide (15,248): (11,178)→(19,318)  (84,498): (80,405)→(88,591)   (15,748): (11,671)→(19,825)
 *   main (18,252): (14,183)→(22,321)  (82,502): (78,407)→(86,597)   (18,752): (14,675)→(22,829)
 *   sheen(20,256): (16,186)→(24,326)  (80,506): (76,412)→(84,600)   (20,756): (16,678)→(24,834)
 *   cyan (22,260): (18,190)→(26,330)  (78,510): (74,416)→(82,604)   (22,760): (18,682)→(26,838)
 */

export default function AnimatedRibbon({ className = '' }: Props) {
  return (
    <div aria-hidden="true" className={`ribbon-root ${className}`}>
      <svg
        className="ribbon-svg"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>

          {/* ─────────────────────────────────────────────────────────────
               Vertical gradients — userSpaceOnUse, y range −30 → 1000.
               Ribbon fades in from the top of the page and fades out at
               the bottom.  Each layer has a slightly different opacity
               profile so they do not read as a single flat composite.
               ───────────────────────────────────────────────────────── */}

          <linearGradient id="rg-atm" x1="0" y1="-30" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="rgba(14,165,233,0)" />
            <stop offset="5%"   stopColor="rgba(14,165,233,0.09)" />
            <stop offset="24%"  stopColor="rgba(14,165,233,0.12)" />
            <stop offset="76%"  stopColor="rgba(14,165,233,0.12)" />
            <stop offset="95%"  stopColor="rgba(14,165,233,0.03)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0)" />
          </linearGradient>

          <linearGradient id="rg-blue" x1="0" y1="-22" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="rgba(37,99,235,0)" />
            <stop offset="4%"   stopColor="rgba(37,99,235,0.40)" />
            <stop offset="20%"  stopColor="rgba(37,99,235,0.48)" />
            <stop offset="80%"  stopColor="rgba(37,99,235,0.43)" />
            <stop offset="96%"  stopColor="rgba(37,99,235,0.07)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0)" />
          </linearGradient>

          {/* Lighter periwinkle for the surface-sheen highlight */}
          <linearGradient id="rg-sheen" x1="0" y1="-16" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="rgba(188,216,255,0)" />
            <stop offset="4%"   stopColor="rgba(188,216,255,0.34)" />
            <stop offset="22%"  stopColor="rgba(210,230,255,0.42)" />
            <stop offset="78%"  stopColor="rgba(210,230,255,0.36)" />
            <stop offset="96%"  stopColor="rgba(188,216,255,0.06)" />
            <stop offset="100%" stopColor="rgba(188,216,255,0)" />
          </linearGradient>

          <linearGradient id="rg-cyan" x1="0" y1="-14" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="rgba(0,195,228,0)" />
            <stop offset="3%"   stopColor="rgba(0,195,228,0.40)" />
            <stop offset="16%"  stopColor="rgba(0,214,244,0.46)" />
            <stop offset="84%"  stopColor="rgba(0,214,244,0.42)" />
            <stop offset="97%"  stopColor="rgba(0,195,228,0.09)" />
            <stop offset="100%" stopColor="rgba(0,195,228,0)" />
          </linearGradient>

          {/* Rim — crisp outer-boundary highlight, no filter */}
          <linearGradient id="rg-rim" x1="0" y1="-16" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="rgba(212,234,255,0)" />
            <stop offset="4%"   stopColor="rgba(212,234,255,0.44)" />
            <stop offset="18%"  stopColor="rgba(224,242,255,0.50)" />
            <stop offset="82%"  stopColor="rgba(224,242,255,0.45)" />
            <stop offset="96%"  stopColor="rgba(212,234,255,0.08)" />
            <stop offset="100%" stopColor="rgba(212,234,255,0)" />
          </linearGradient>

          {/* ─────────────────────────────────────────────────────────────
               SVG blur filters — filterUnits="userSpaceOnUse" with large
               absolute regions so the Gaussian output is never clipped.
               On 1440 px wide viewport: 1 SVG unit ≈ 14.4 px.
               ───────────────────────────────────────────────────────── */}

          <filter id="rf-atm"   filterUnits="userSpaceOnUse" x="-14" y="-60" width="128" height="1120">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
          <filter id="rf-wide"  filterUnits="userSpaceOnUse" x="-8"  y="-50" width="116" height="1100">
            <feGaussianBlur stdDeviation="0.42" />
          </filter>
          <filter id="rf-main"  filterUnits="userSpaceOnUse" x="-8"  y="-40" width="116" height="1080">
            <feGaussianBlur stdDeviation="0.30" />
          </filter>
          <filter id="rf-sheen" filterUnits="userSpaceOnUse" x="-6"  y="-35" width="112" height="1070">
            <feGaussianBlur stdDeviation="0.18" />
          </filter>
          <filter id="rf-cyan"  filterUnits="userSpaceOnUse" x="-6"  y="-35" width="112" height="1070">
            <feGaussianBlur stdDeviation="0.25" />
          </filter>
        </defs>

        {/*
          strokeWidth values are in SVG units (1 unit ≈ 14.4 px at 1440 px wide):
            atm  14   ≈ 202 px   wide  6.2  ≈  89 px
            main  4.2 ≈  60 px   sheen 1.8  ≈  26 px
            cyan  2.8 ≈  40 px   rim   0.55 ≈   8 px
        */}

        {/* ── 1: atmospheric glow — widest, softest, deepest */}
          <path
            className="rp rp--atm"
            d="M 88 -30 C 92 72, 8 172, 12 240 C 16 308, 90 392, 88 490 C 86 588, 10 668, 12 745 C 14 822, 90 922, 88 1000"
            fill="none" stroke="url(#rg-atm)"
            strokeWidth="14"
            filter="url(#rf-atm)"
          />

          {/* ── 2: wide blue backing — sets the ribbon's chromatic mass */}
          <path
            className="rp rp--wide"
            d="M 84 -22 C 88 78, 11 178, 15 248 C 19 318, 80 405, 84 498 C 88 591, 11 671, 15 748 C 19 825, 88 921, 84 1000"
            fill="none" stroke="url(#rg-blue)"
            strokeWidth="6.2"
            filter="url(#rf-wide)"
          />

          {/* ── 3: main crisp ribbon — primary visible band */}
          <path
            className="rp rp--main"
            d="M 82 -18 C 86 82, 14 183, 18 252 C 22 321, 78 407, 82 502 C 86 597, 14 675, 18 752 C 22 829, 86 924, 82 1000"
            fill="none" stroke="url(#rg-blue)"
            strokeWidth="4.2"
            filter="url(#rf-main)"
          />

          {/* ── 4: surface sheen — lighter periwinkle highlight across face */}
          <path
            className="rp rp--sheen"
            d="M 80 -16 C 84 86, 16 186, 20 256 C 24 326, 76 412, 80 506 C 84 600, 16 678, 20 756 C 24 834, 84 925, 80 1000"
            fill="none" stroke="url(#rg-sheen)"
            strokeWidth="1.8"
            filter="url(#rf-sheen)"
          />

          {/* ── 5: cyan accent — vivid colour contrast along one edge */}
          <path
            className="rp rp--cyan"
            d="M 78 -14 C 82 90, 18 190, 22 260 C 26 330, 74 416, 78 510 C 82 604, 18 682, 22 760 C 26 838, 82 926, 78 1000"
            fill="none" stroke="url(#rg-cyan)"
            strokeWidth="2.8"
            filter="url(#rf-cyan)"
          />

          {/* ── 6: rim — thin crisp edge highlight; no filter for sharp boundary */}
          <path
            className="rp rp--rim"
            d="M 84 -22 C 88 78, 11 178, 15 248 C 19 318, 80 405, 84 498 C 88 591, 11 671, 15 748 C 19 825, 88 921, 84 1000"
            fill="none" stroke="url(#rg-rim)"
            strokeWidth="0.55"
          />

      </svg>
    </div>
  );
}
