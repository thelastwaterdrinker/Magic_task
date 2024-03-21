import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <a href="/">Magic Task</a>
        </div>

        <div>
          <a href="/">Tasks</a>
        </div>

        <div>
          <a href="/login">login</a>
        </div>
      </div>
    </div>
  );
}
