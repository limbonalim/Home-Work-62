import React, {useState} from 'react';
import Board from '../../components/FindRing/Board/Board.tsx';
import Game from '../../components/FindRing/Game/Game.tsx';
import {Cell} from '../../types';


const createItems = (numberOfCell: number = 36): Cell[] => {
  const items: Cell[] = [];
  const random: number = Math.floor(Math.random() * numberOfCell);
  for (let i = 0; i < numberOfCell; i++) {
    let item: Cell = {
      hasItem: false,
      clicked: false,
      id: i.toString(),
    };
    items.push(item);
  }
  items[random].hasItem = true;
  return items;
};
const FindRingApp = () => {
  const [items, setItems] = useState(createItems());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  let squareList: React.ReactNode;

  const showInner = (id: string) => {
    if (!gameOver) {
      setScore(prevState => prevState + 1);
      setItems(prevState => prevState.map((cell) => {
        if (cell.id !== id) {
          return {...cell};
        } else {
          if (cell.hasItem) {
            setGameOver(true);
          }
          return {...cell, clicked: true};
        }
      }));
    }
  };

  const reset = () => {
    setItems(createItems());
    setScore(0);
    setGameOver(false);
  };

  squareList = (
    <Game showInner={showInner} items={items}/>
  );

  return (
    <div>
      <Board counter={score} reset={reset} gameOver={gameOver}>
        {squareList}
      </Board>
    </div>
  );
};

export default FindRingApp;
