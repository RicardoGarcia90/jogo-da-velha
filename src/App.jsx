import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

// CONTINUAR EM AULA 74 CONCEPT REPETITION: WORKING WITH STATE

export default App;
