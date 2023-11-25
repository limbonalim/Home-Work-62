import React from 'react';
import Square from '../Square/Square.tsx';
import {Cell} from '../../../types';
import './Game.css';

interface Props {
  items: Cell[];
  showInner: (id: string) => void;
}

const Game: React.FC<Props> = ({items, showInner}) => {
  return (
    <div className="Game">
      {items.map((item: Cell) => {
        return (
          <Square
            key={item.id}
            hasItem={item.hasItem}
            clicked={item.clicked}
            showInner={showInner}
            id={item.id}
          />);
      })}
    </div>
  );
};

export default Game;