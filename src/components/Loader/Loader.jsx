import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Oval
        height={60}
        width={60}
        color="#2196f3"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#2196f3"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
