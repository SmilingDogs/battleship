import { useState } from 'react';
import { createArray } from '../utils/array';
import { createFleet } from '../utils/battlefield';
import { WATER, SHIP, CHECKED_WATER, CHECKED_SHIP } from '../utils/cellstate';

const MATRIX_LENGTH = 10;

const createEmptyBattlefield = () =>
  createArray(MATRIX_LENGTH, () => createArray(MATRIX_LENGTH, () => 0));

const revealBattlefield = (matrix: number[][]) =>
  matrix.map((line) =>
    line.map((cell) => {
      if (cell === SHIP) {
        return CHECKED_SHIP;
      }

      return cell === WATER ? CHECKED_WATER : cell;
    })
  );

const createBattlefieldWithEnemyShip = () => {
  const battlefieldWithShip = createEmptyBattlefield();
  const fleet = createFleet([4, 3], MATRIX_LENGTH);

  fleet.flat().forEach(({ x, y }) => {
    battlefieldWithShip[y][x] = SHIP;
  });

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

    if (cell === CHECKED_WATER || cell === CHECKED_SHIP) {
      return;
    }

    const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP;
    const nextMatrix = state.matrix.map((line, lineIndex) =>
      lineIndex === y ? line.map((value, cellIndex) => (cellIndex === x ? newState : value)) : line
    );

    const won = nextMatrix.every((line) => line.every((value) => value !== SHIP));
    const matrix = won ? revealBattlefield(nextMatrix) : nextMatrix;

    setState({ ...state, matrix, turn: state.turn + 1, won });
  };

  const { turn, matrix, won } = state;

  return { turn, reset, matrix, fire, won };
};
