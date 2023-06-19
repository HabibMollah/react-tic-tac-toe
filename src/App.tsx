import { useState } from 'react';
import Board from './Board';

function App() {
  // the state of all squares of the game
  const [array, setArray] = useState<null[] | string[]>(Array(9).fill(null));
  // for deciding is 'X' next or 'O'
  const [xNext, setXnext] = useState(true);

  return (
    <div>
      <Board
        array={array}
        setArray={(boxes) => setArray(boxes)}
        xNext={xNext}
        setXnext={(a) => setXnext(a)}
      />
    </div>
  );
}

export default App;
