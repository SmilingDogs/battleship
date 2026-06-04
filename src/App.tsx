import "./App.css";
import { Battlefield } from "./components/Battlefield";
import { HeaderWithCounter } from "./components/HeaderWithCounter";
import { ResetButton } from "./components/ResetButton";
import { RussianWarship } from "./components/RussianWarship";
import { useGameState } from "./hooks/useGameState";

function App() {
  const { turn, reset, matrix, fire, won } = useGameState();

  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <Battlefield matrix={matrix} onFire={fire} disabled={false} won={won} />
      <ResetButton reset={reset} />
      <RussianWarship sunk={won} />
    </div>
  );
}

export default App;
