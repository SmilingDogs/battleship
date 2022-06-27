import { useState } from 'react';
import { createArray } from '../utils/array';
import { createWarShip } from '../utils/battlefield';
import { WATER, SHIP, CHECKED_WATER, CHECKED_SHIP } from '../utils/cellstate';

const MATRIX_LENGTH = 10;

const createEmptyBattlefield = () =>
  createArray(MATRIX_LENGTH, () => createArray(MATRIX_LENGTH, () => 0));


const createBattlefieldWithEnemyShip = () => {
  const battlefieldWithShip = createEmptyBattlefield();
  const newWarShip4 = createWarShip(4, MATRIX_LENGTH);
  const newWarShip3 = createWarShip(3, MATRIX_LENGTH)

  newWarShip4.forEach(({ x, y }) => {
    battlefieldWithShip[y][x] = SHIP;
  });

  newWarShip3.forEach(({ x, y }) => {
    battlefieldWithShip[y][x] = SHIP;
  });
  // console.log(battlefieldWithShip);

  return battlefieldWithShip;
};

export const useGameState = () => {

  const [state, setState] = useState({
    matrix: createBattlefieldWithEnemyShip(),
    turn: 0,
    won: false,
  });

  const reset = () => {
    setState({
      matrix: createBattlefieldWithEnemyShip(),
      turn: 0,
      won: false,
    });
  };

  const fire = (y: number, x: number) => {

    const cell = state.matrix[y][x];

    console.log(cell);


    if (cell === CHECKED_WATER || cell === CHECKED_SHIP) {
      return;
    }

    const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP;
    console.log(newState);

    state.matrix[y][x] = newState;

    const won = state.matrix.every((line) => line.every((x) => x !== SHIP));

    setState({ ...state, turn: state.turn + 1, won });
    console.log(state);

  }
  const { turn, matrix, won } = state;

  return { turn, reset, matrix, fire, won };
  
};
