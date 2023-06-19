import { useState } from 'react';
import Board from './Board';

export type SquareType = null | string;

function App() {
  // the state of all squares of the game
  const [array, setArray] = useState<SquareType[]>(Array(9).fill(null));
  // for deciding is 'X' next or 'O'
  const [xNext, setXnext] = useState(true);
  // history
  const [history, setHistory] = useState<SquareType[][]>([Array(9).fill(null)]);

  return (
    <div className="mx-auto flex flex-col justify-evenly  md:flex-row">
      <div>
        <Board
          array={array}
          setArray={(boxes) => setArray(boxes)}
          xNext={xNext}
          setXnext={(bool) => setXnext(bool)}
          history={history}
          setHistory={(moves) => setHistory(moves)}
        />
      </div>
      <div className="mt-8 text-center">
        <ol className="list-inside list-decimal">
          {history.map((move, index) => (
            <li>
              <button
                className="mb-1 rounded-lg bg-slate-200 p-1 font-bold"
                onClick={() => setArray(move)}>
                Go to move #{index + 1}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
