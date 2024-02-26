import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './Forum.module.css';

export default function Form({ onAdd }) {
  const [userInput, setUserInput] = useState({
    name: '',
    username: '',
  });

  console.log(userInput);

  const handleChange = evt => {
    // console.log(userInput);

    setUserInput({
      ...userInput,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    console.log(userInput);
    onAdd({
      id: nanoid(5),
      name: evt.target.name.value,
      username: evt.target.username.value,
    });
    setUserInput({
      name: '',
      username: '',
    });
  };
  return (
    <>
      <form onSubmit={handleSubmitForm} className={css.form}>
        <label className={css.label}>
          Name:
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Username:{' '}
          <input
            type="text"
            name="username"
            value={userInput.username}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add
        </button>
      </form>
    </>
  );
}
