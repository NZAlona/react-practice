import css from './Card.module.css';

export default function Card({ values, onDelete }) {
  return (
    <>
      <ul className={css.list}>
        {values.map(({ id, name, username }) => (
          <li key={id} className={css.item}>
            <span>
              <p>Name: {name}</p>
              <p>Surname: {username}</p>
            </span>

            <span>
              <button type="button" className={css.btnDelete} onClick={() => onDelete(id)}>
                Remove
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
