import { NavLink } from 'react-router-dom';
import css from './HomeAuthNav.module.css';

export const HomeAuthNav = () => {
  return (
    <div className={css.homeauthnav}>
      <NavLink className={css.homeauthnav__link} to="/register">
        Sign in
      </NavLink>
      <NavLink className={css.homeauthnav__link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
