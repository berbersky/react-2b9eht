import React, { useState, useCallback } from 'react';
import ChronoUI from './ChronoUI';
import ClockUI from './ClockUI';
// import useClock from './useClock';
import './style.css';
// import { useFetch } from './useFetch';
//import Counter from './Counter';

export default function App() {
  console.log('');
  console.log('APP re-rendring');

  // const [url, setUrl] = useState(null);
  // get remote data
  // const { data, load } = useFetch({
  //   // myOptions,
  //   // url,
  // });

  // {useCallback}
  // 1- if no dependency array set, the oly version available of it, it's the one generated at
  //       the first rendring.
  // 2- If dependency array is set, this callback will regenerate a new version each time the
  //       value change
  // 3- If a function is used in setter to muttete the state agin a new version will be generated
  //       each time the current value change
  // 4- Used for passing callback the the child component, in which case only if the callbak if
  //       regenrating base on raison above, causing the rendre of the child and this due to
  //       comparaison by ref wish be different each tme even it's the same

  // const handleClick = useCallback((adress) => {
  //   console.log('handleClick useCallback befort set url', url, adress);
  //   setUrl((prev) => adress);
  //   console.log('handleClick useCallback After set url', url, adress);
  // }, []);

  // Get time clock
  // const time = useClock();
  // const [index, setIndex] = useState(0);
  // const updateIndex = useCallback(() => {
  //   setIndex(index + 1);
  // }, [index]);
  return (
    <div className="App">
      {/* <button onClick={() => load('/jack.json')}>Jack</button>
      <button onClick={() => load('/sally.json')}>Sally</button>
      {<h1>Hello {data && data.name}!</h1>} */}
      <ClockUI />

      <h1>Chrono </h1>
      <ChronoUI />
      <hr />

      {/* <h1>Counter </h1>
      <Counter key={index} /> */}
      {/* <div>
        <h4> To create a new instance of Counter</h4>
        <button onClick={updateIndex}>Update Index</button>
      </div> */}
    </div>
  );
}
