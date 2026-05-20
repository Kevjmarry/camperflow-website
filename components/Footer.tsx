export default function Footer() {
  return (
    <footer
      className="py-8 text-center text-[13px]"
      style={{
        position: 'relative',
        backgroundColor: 'rgba(248, 250, 252, 0.88)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderTop: '1px solid rgba(14, 30, 54, 0.07)',
        color: '#64748b',
      }}
    >
      © {new Date().getFullYear()} CamperFlow. All rights reserved.
    </footer>
  );
}
