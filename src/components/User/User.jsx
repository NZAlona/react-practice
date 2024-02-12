// import css from "../User.module.css"

export const User = ({ user }) => {
  console.log(user);
  return (
    <>
      <ul>
        {user.map(elem => (
          <>
            <li key={elem.id}>
              <p>Name: {elem.name}</p>
              <p>Email: {elem.email}</p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
