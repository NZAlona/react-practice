import css from './Section.module.css';
import { FaRegRectangleList } from 'react-icons/fa6';

export const Section = ({ children, title }) => {
  return (
    <section className={css.mainSection}>
      {title && (
        <h2 className={css.sectionTitle}>
          <FaRegRectangleList className={css.iconList} size="40" />
          {title}
        </h2>
      )}

      {children}
    </section>
  );
};
