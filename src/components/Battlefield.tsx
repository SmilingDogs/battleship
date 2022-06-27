import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from '../utils/cellstate';

type CellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
  won: boolean;
};

const cellStateMap: any = {
  [WATER]: '',
  [SHIP]: '',
  [CHECKED_WATER]: '🌊',
  [CHECKED_SHIP]: '🔥',
};

const Cell = ({ handleClick, value, x, y, won }: CellProps) => {
  return (
    <button
      className={cellStateMap[value] === '🔥' ? 'cell hit' : 'cell'}
      onClick={() => handleClick(y, x)}
    >
      {won ? cellStateMap[CHECKED_WATER] : cellStateMap[value]}
    </button>
  );
};

type BattlefieldProps = {
  matrix: number[][];
  disabled: boolean;
  onFire: (y: number, x: number) => void;
  won: boolean;
};

const empty = () => null;

export const Battlefield = ({ matrix, onFire, disabled, won }: BattlefieldProps) => {

  const fire = disabled ? empty : onFire;

  return (
    <div className={`${disabled ? 'disabled' : ''}`}>
      {matrix.map((line, lineNumber) => (
        <div className='line' key={lineNumber}>
          {line.map((v, i) => (
            <Cell
              key={`${lineNumber}${i}`}
              value={v}
              y={lineNumber}
              x={i}
              handleClick={fire}
              won={won}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
