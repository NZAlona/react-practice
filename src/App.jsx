import './App.css';
import { data } from './data/users';
import { User } from './components/User/User';
import { Section } from './components/Section/Section';
import { Address } from './components/Address/Address';

export const App = () => {
  // console.log(data);
  return (
    <>
      <Section title="List of users">
        <User user={data} />
      </Section>
      <Section title="List of addreses">
        <Address street={data} />
      </Section>
    </>
  );
};
