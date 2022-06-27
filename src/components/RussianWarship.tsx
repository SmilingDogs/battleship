import warship from '../assets/russian-warship.png';

type WarshipProps = {
  sunk: boolean;
};

export const RussianWarship = ({ sunk }: WarshipProps) => {
  return (
    <div className={sunk ? 'show' : 'hidden'}>
      <img src={warship} alt='warship' />
    </div>
  );
};
