import React, { useEffect, useState } from 'react';

const Greeting = ({ name }) => {
  const [currentName, setCurrentName] = useState(name);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentName('Alfonsina');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <p>Hola {currentName}</p>;
};

export default Greeting;
