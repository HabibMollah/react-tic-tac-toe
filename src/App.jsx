import { useState } from 'react';

function App() {
  // the state of all squares of the game
  const [array, setArray] = useState(Array(9).fill(null));
  // for deciding is 'X' next or 'O'
  const [xNext, setXnext] = useState(true);

  function handleClick(i) {
    // return early if the square has been clicked once or the game is over
    if (array[i] || calculateWinner(array)) return;
    // create a copy of the state and modify the state then set that copy as state
    const boxes = array.slice();
    boxes[i] = xNext ? 'X' : 'O';
    setXnext(!xNext);
    setArray(boxes);
  }

  let status;
  status = calculateWinner(array)
    ? `Winner: ${calculateWinner(array)}`
    : xNext
    ? 'Next turn: X'
    : 'Next turn: O';
  return (
    <div className="my-[20vh] text-center">
      <h1 className="my-4 text-4xl font-bold text-gray-400">{status}</h1>
      <div className="mx-auto grid w-80 grid-cols-3 gap-2">
        <Square value={array[0]} onSquareClick={() => handleClick(0)} />
        <Square value={array[1]} onSquareClick={() => handleClick(1)} />
        <Square value={array[2]} onSquareClick={() => handleClick(2)} />
        <Square value={array[3]} onSquareClick={() => handleClick(3)} />
        <Square value={array[4]} onSquareClick={() => handleClick(4)} />
        <Square value={array[5]} onSquareClick={() => handleClick(5)} />
        <Square value={array[6]} onSquareClick={() => handleClick(6)} />
        <Square value={array[7]} onSquareClick={() => handleClick(7)} />
        <Square value={array[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="mx-auto h-24 w-24 rounded-3xl border border-gray-100 bg-gray-100 text-4xl font-black text-white hover:bg-gray-200">
      <div className={value === 'X' ? 'text-red-500' : 'text-blue-500'}>
        {value}
      </div>
    </button>
  );
}
// function for deciding who won
function calculateWinner(arr) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) return arr[a];
  }
  return null;
}
export default App;
