import './App.css';
import { HeaderWithCounter } from './components/HeaderWithCounter';
import { Battlefield } from './components/Battlefield';
import { ResetButton } from './components/ResetButton';
import { useGameState } from './hooks/useGameState';
import { RussianWarship } from './components/RussianWarship'


function App() {
  const {turn, reset, matrix, fire, won} = useGameState();

  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <Battlefield matrix={matrix} onFire={fire} disabled={false} />
      <ResetButton reset={reset} />
      <RussianWarship sunk={won} />
    </div>
  );
}

export default App;
