import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleSubtractOne = () => {
    setCount(count - 1);
 }
 const handleAddOne = () => {
  setCount(count + 1);
}
  return (
    <>
    <p>{count}</p>
    <button onClick={handleSubtractOne}>-1</button>
    <button onClick={handleAddOne}>+1</button>
    </>
    
  );
}

export default App;
