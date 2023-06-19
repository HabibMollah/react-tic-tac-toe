import { SquareType } from './App';
import Square from './Square';
import calculateWinner from './calculateWinner';

interface Props {
  array: SquareType[];
  setArray: (boxes: SquareType[]) => void;
  xNext: boolean;
  setXnext: (a: boolean) => void;
  history: SquareType[][];
  setHistory: (boxes: SquareType[][]) => void;
}

function Board({
  array,
  setArray,
  xNext,
  setXnext,
  history,
  setHistory,
}: Props) {
  function handleClick(i: number) {
    // return early if the square has been clicked once or the game is over
    if (array[i] || calculateWinner(array)) return;
    // create a copy of the state and modify the state then set that copy as state
    const boxes = array.slice();
    boxes[i] = xNext ? 'X' : 'O';
    setXnext(!xNext);
    setArray(boxes);
    setHistory([...history, boxes]);
  }

  let status;
  status = calculateWinner(array)
    ? `Winner: ${calculateWinner(array)}`
    : xNext
    ? 'Next turn: X'
    : 'Next turn: O';
  return (
    <div className="mb-8 text-center">
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

export default Board;
