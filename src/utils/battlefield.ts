import { createArray } from '../utils/array';
import { random } from '../utils/random';

export type Point = {
  x: number;
  y: number;
};

const createHorizontalWarship = (length: number, maxSize: number) => {
  const maxX = maxSize - length;
  const maxY = maxSize - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(length, (i) => {
    return { y: headY, x: headX + i };
  });
};

const createVerticalWarship = (length: number, maxSize: number) => {
  const maxX = maxSize - 1;
  const maxY = maxSize - length;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(length, (i) => {
    return { y: headY + i, x: headX };
  });
};

const pointsAreTouching = (first: Point, second: Point) =>
  Math.abs(first.x - second.x) <= 1 && Math.abs(first.y - second.y) <= 1;

const isShipPlacementValid = (ship: Point[], fleet: Point[][]) =>
  fleet.every((existingShip) =>
    existingShip.every((existingPoint) =>
      ship.every((point) => !pointsAreTouching(existingPoint, point))
    )
  );

export const createWarShip = (shipLength: number, maxSize: number): Point[] => {
  const postion = random(0, 1) === 0 ? 'horizontal' : 'vertical';

  return postion === 'horizontal'
    ? createHorizontalWarship(shipLength, maxSize)
    : createVerticalWarship(shipLength, maxSize);
};

export const createFleet = (shipLengths: number[], maxSize: number): Point[][] => {
  const fleet: Point[][] = [];

  shipLengths.forEach((shipLength) => {
    let ship: Point[] = [];
    let isValidPosition = false;

    while (!isValidPosition) {
      ship = createWarShip(shipLength, maxSize);
      isValidPosition = isShipPlacementValid(ship, fleet);
    }

    fleet.push(ship);
  });

  return fleet;
};
