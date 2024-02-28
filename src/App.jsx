import './App.css';
import css from '../src/App.module.css';
// import { data } from './data/users';
import Card from './components/Card/Card';
import { useState, useEffect } from 'react';
import Form from './components/Form/Form';

const getLocaldata = () => {
  const savedData = window.localStorage.getItem('save-card');

  if (savedData !== null) {
    return JSON.parse(savedData);
  }
  return [];
};

export default function App() {
  const [newUser, setNewUser] = useState(getLocaldata());

  useEffect(() => {
    window.localStorage.setItem('save-card', JSON.stringify(newUser)), [newUser];
  });

  const handleNewUser = newCard => {
    console.log(newCard);
    setNewUser(currentDataCards => {
      console.log(currentDataCards);
      return [...currentDataCards, newCard];
    });
  };

  const deleteUser = userId => {
    setNewUser(currentDataCards => {
      return currentDataCards.filter(card => card.id !== userId);
    });
  };

  return (
    <>
      <h1 className={css.title}>List of current users</h1>
      <Form onAdd={handleNewUser} />
      <Card values={newUser} onDelete={deleteUser} />
    </>
  );
}
