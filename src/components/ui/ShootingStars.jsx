export default function ShootingStars({ count = 6 }) {
  return (
    <div className="shooting-stars" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span className="shooting-star" key={i}></span>
      ))}
    </div>
  );
}
