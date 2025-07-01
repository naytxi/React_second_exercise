import React from 'react';

const Home = ({ dishes }) => {
  return (
    <div>
      <h2>Menú</h2>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p>Precio: ${dish.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
