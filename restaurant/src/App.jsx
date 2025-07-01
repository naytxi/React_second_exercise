import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const dishes = [
    {
      id: 1,
      name: 'plato 1',
      description: 'Este es el plato 1',
      price: 10,
    },
    {
      id: 2,
      name: 'plato 2',
      description: 'Este es el plato 2',
      price: 20,
    },
    {
      id: 3,
      name: 'plato 3',
      description: 'Este es el plato 3',
      price: 15,
    },
  ];

  return (
    <div>
      <h1>Ejercicio 1: Counter</h1>
      <Counter start={10} step={2} />

      <h1>Ejercicio 2: Greetings</h1>
      <Greetings name="Euralio" />

      <h1>Ejercicio 3: Restaurante</h1>
      <Header />
      <Home dishes={dishes} />
    </div>
  );
}

export default App;
