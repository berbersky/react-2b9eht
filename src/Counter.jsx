import React, { useState, useEffect } from 'react';

let counterId = 0;
export default function Counter() {
  const [counter, setCounter] = useState(0);
  console.log('COUNTER UI')
  useEffect(() => {
    // increment the instance
    counterId++;
    // this log should print only ones since useEffect runce only one du to the [] dependency
    console.log(` ID: ${counterId} starts ${counter}`);
    // lanch the interval
    const tic = setInterval(() => {
      setCounter((currentValue) => {
        console.log(`Counter ID: ${counterId} starts ${currentValue}`);
        return currentValue + 1;
      });
    }, 1000);

    return () => {
      clearInterval(tic);
    };
  }, []);

  return (
    <div>
      <h2>{counter}</h2>
    </div>
  );
}
