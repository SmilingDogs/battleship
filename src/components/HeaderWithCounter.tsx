type HeaderProps = {
  turn: number;
  sunk: boolean;
};

export const HeaderWithCounter = ({ turn, sunk }: HeaderProps) => {
  return (
    <div>
      <p>2 Enemy ships are {sunk ? `destroyed` : `hiding in the sea...`}</p>
      <h2> Number of srikes: {turn}</h2>
    </div>
  );
};
