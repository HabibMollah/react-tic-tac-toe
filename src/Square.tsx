interface Props {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: Props) {
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

export default Square;
