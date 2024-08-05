import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [data, setData] = useState(100);
  const increase = () => {
    setData(data + 10);
  };
  const decrease = () => {
    setData(data - 10);
  };
  useEffect(() => {
    alert(`Current value of data: ${data}`);
  }, [data]);

  return (
    <div className="flex justify-center items-center h-96 flex-col">
      <h1 className='text-center text-5xl'>data: {data}</h1>
      <button onClick={increase} className='bg-red-500 px-4 py-2 hover:bg-blue-400
         active:bg-blue-600'>Increase by 10</button>
         <button onClick={decrease} className='bg-blue-500 px-4 py-2 hover:bg-blue-400
         active:bg-blue-600'>Decrease by 10</button>
    </div>
  );
}

export default CounterComponent;
