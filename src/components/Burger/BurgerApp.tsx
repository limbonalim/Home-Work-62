import {useState} from 'react';
import Ingredients from '../../components/Burger/Ingredients/Ingredients';
import Burger from '../../components/Burger/Burger/Burger';
import {Filling, Counter} from '../../types';
import meatImage from '../../assets/Burger/meat.png';
import baconImage from '../../assets/Burger/bacon.png';
import cheeseImage from '../../assets/Burger/cheese.png';
import saladImage from '../../assets/Burger/salad.png';
import './BurgerApp.css';

const INGREDIENTS: Filling[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Bacon', price: 60, image: baconImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
];

const BurgerApp = () => {
  const [ingredients, setIngredients] = useState<Counter[]>([
    {name: 'Meat', count: 1},
    {name: 'Bacon', count: 0},
    {name: 'Cheese', count: 1},
    {name: 'Salad', count: 1},
  ]);
  const [total, setTotal] = useState(170);

  const addIngredient = (name: string) => {
    let price = INGREDIENTS.reduce((acc, item) => {
      if (item.name === name) {
        return acc + item.price;
      }
      return acc;
    }, 0);
    setTotal(prevState => prevState + price);
    setIngredients(prevState => prevState.map((item) => {
      if (name === item.name) {
        return {...item, count: item.count + 1};
      }
      return item;
    }));
  };

  const deleteIngredient = (name: string, quantity: number) => {
    if (quantity > 0) {
      let price = INGREDIENTS.reduce((acc, item) => {
        if (item.name === name) {
          return acc + item.price;
        }
        return acc;
      }, 0);
      setTotal(prevState => {
        if (prevState > 30) {
          return prevState - price;
        } else {
          return 30;
        }
      });
      setIngredients(prevState => prevState.map((item) => {
        if (name === item.name && item.count > 0) {
          return {...item, count: item.count - 1};
        }
        return item;
      }));
    }
  };

  return (
    <div className="MYContainer">
      <Ingredients menu={INGREDIENTS} count={ingredients} addHandler={addIngredient} deleteHandler={deleteIngredient}/>
      <Burger price={total} ingredients={ingredients}/>
    </div>
  );
};

export default BurgerApp;
