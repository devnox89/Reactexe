export function Welcome({ name = "Francesco" }) {
  return (
    <div className="welcome">
      <p>
        Welcome, <strong>{name}!</strong>
      </p>
    </div>
  );
}
