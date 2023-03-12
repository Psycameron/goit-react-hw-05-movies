import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';

import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
