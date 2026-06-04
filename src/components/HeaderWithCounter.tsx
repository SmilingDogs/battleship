type HeaderProps = {
  turn: number;
};

export const HeaderWithCounter = ({ turn }: HeaderProps) => (
  <div>
    <p>2 Enemy ships are hiding in the sea...</p>
    <h2> Number of srikes: {turn}</h2>
  </div>
);
