export const Address = ({ street }) => {
  console.log(street);
  return (
    <>
      <ul>
        {street.map(({ id, address: { city, street } }) => (
          <>
            <li key={id}>
              <p>City: {city}</p>
              <p>Street : {street}</p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
