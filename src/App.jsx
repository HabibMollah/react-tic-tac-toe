import { useState } from 'react';

function App() {
  const [array, setArray] = useState(Array(9).fill(null));

  function handleClick(i) {
    const boxes = array.slice();
    boxes[i] = 'X';
    setArray(boxes);
    console.log(array);
    console.log(boxes);
  }

  return (
    <div className="container mx-auto my-[20vh] grid w-80 grid-cols-3 gap-2 text-center">
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
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="mx-auto h-24 w-24 rounded-3xl border border-blue-400 bg-blue-400 text-4xl font-black text-white">
      {value}
    </button>
  );
}
export default App;
