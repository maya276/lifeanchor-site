export function Logo({ light = false }) {
  const color = light ? '#FFFFFF' : '#2D1B69';
  return (
    <div className="flex items-center gap-2.5">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 20.5s-8.5-5.2-8.5-11.2A4.8 4.8 0 0 1 12 6.4a4.8 4.8 0 0 1 8.5 2.9C20.5 15.3 12 20.5 12 20.5Z"
          stroke={color}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="font-sans font-semibold tracking-tight"
        style={{ color, fontSize: '16px' }}
      >
        LifeAnchor.ai
      </span>
    </div>
  );
}
