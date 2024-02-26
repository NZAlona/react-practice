import css from './Card.module.css';

export default function Card({ values }) {
  return (
    <>
      <ul className={css.list}>
        {values.map(({ id, name, username }) => (
          <li key={id} className={css.item}>
            <p>Name: {name}</p>
            <p>Surname: {username}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
