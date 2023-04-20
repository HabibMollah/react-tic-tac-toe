function Square({ value }) {
  return (
    <button className="p-8 m-2 border border-blue-400  rounded-3xl bg-blue-400 text-white font-black text-4xl">
      {value}
    </button>
  );
}

function App() {
  return (
    <div className="container mx-auto grid grid-cols-3">
      <Square value={1} />
      <Square value={2} />
      <Square value={3} />
      <Square value={4} />
      <Square value={5} />
      <Square value={6} />
      <Square value={7} />
      <Square value={8} />
      <Square value={9} />
    </div>
  );
}

export default App;
