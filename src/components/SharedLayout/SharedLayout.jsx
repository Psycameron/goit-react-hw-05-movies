import { Outlet, Link } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <header>
        <nav style={{ height: 50 }}>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
