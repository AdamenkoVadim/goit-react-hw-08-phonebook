import { useAuth } from 'hooks';
import { HomeAuthNav } from 'components/HomeAuthNav/HomeAuthNav';
import css from './HomePage.module.css';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <section>
        <h1 className={css.text}>Phonebook</h1>
        {!isLoggedIn && <HomeAuthNav />}
      </section>
    </>
  );
};
