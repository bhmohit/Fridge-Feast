import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="branding">
        <h1>🍽 Food Feast</h1>
      </div>
      <div className="pages">
        <ul>
          <a href="/create">Create</a>
          <a href="/learn">Learn</a>
          <a href="/donate">Donate</a>
        </ul>
      </div>
    </div>
  );
}
