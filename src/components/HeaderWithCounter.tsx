type HeaderProps = {
  turn: number,
};

export const HeaderWithCounter = ({ turn } : HeaderProps) => (
    <h2> Number of srikes: {turn}</h2>
  );

