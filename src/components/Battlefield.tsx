import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from "../utils/cellstate";

type CellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
};

const cellStateMap: Record<number, string> = {
  [WATER]: "",
  [SHIP]: "",
  [CHECKED_WATER]: "\u{1F30A}",
  [CHECKED_SHIP]: "\u{1F525}",
};

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
    <button
      className={value === CHECKED_SHIP ? "cell hit" : "cell"}
      onClick={() => handleClick(y, x)}
    >
      {cellStateMap[value]}
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

export const Battlefield = ({
  matrix,
  onFire,
  disabled,
}: BattlefieldProps) => {
  const fire = disabled ? empty : onFire;

  return (
    <div className={`${disabled ? "disabled" : ""}`}>
      {matrix.map((line, lineNumber) => (
        <div className="line" key={lineNumber}>
          {line.map((v, i) => (
            <Cell
              key={`${lineNumber}${i}`}
              value={v}
              y={lineNumber}
              x={i}
              handleClick={fire}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
