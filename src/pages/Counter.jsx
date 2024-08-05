import React, { useEffect, useState } from 'react'

const Counter = () => {

//     let [count, setCount] = useState(0)

//     const increase =() => {
//         setCount(++count)
//     }

//     // useEffect - to show side effects
//     // useEffect(function, [dependency])
//     // function -side effect to be shown
//     // dependency -state variables that trigger the function
//     // [] -> effect is shown on page load
//     // [a,b,c] => effect is shown on page load,when any of a,b or c changes
//     // null -> if no dependancy array is passed, everytime when any state changes, effect is shown 

//     useEffect(()=>{
//         alert("Count Updated")
//     },[count])

//   return (
//     <>
//     <div className="flex justify-center items-center h-96 flex.col">
//         <h1 className='text-center text-5xl'>Count: {count}</h1>
//         <button onClick={increase} className='bg-blue-500 px-4 py-2 hover:bg-blue-400
//          active:bg-blue-600'>Increase</button>
//     </div>
//     </>
//   )
// }
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
    <>
    <div className="flex justify-center items-center h-96 flex-col">
      <h1 className='text-center text-5xl'>data: {data}</h1>
      <button onClick={increase} className='bg-red-500 px-4 py-2 hover:bg-blue-400
        active:bg-blue-600'>Increase by 10</button>
        <button onClick={decrease} className='bg-blue-500 px-4 py-2 hover:bg-blue-400
        active:bg-blue-600'>Decrease by 10</button>
    </div>
    </>
  );
  }

export default Counter