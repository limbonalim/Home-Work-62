import React from 'react';
import {Cell} from '../../../types';
import './Square.css';

export interface SquareType extends Cell {
  showInner: (id: string) => void;
}

const Square: React.FC<SquareType> = ({hasItem, clicked, showInner, id}) => {
  const className: string[] = ['Square'];
  if (clicked) {
    className.push('active');
  }

  const onClick = () => {
    if (!clicked) {
      showInner(id);
    }
  };

  return (
    <div className={className.join(' ')} onClick={() => onClick()}>
      {hasItem ? <span className="ring">o</span> : null}
    </div>
  );
};

export default Square;