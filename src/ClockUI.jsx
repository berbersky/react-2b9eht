import React, { useRef, useEffect } from 'react';
import useClock from './useClock';

const ChronoUI = () => {
  const clock = useRef(null);
  useClock(clock);

  // useEffect(()=> {
  //   clock.current.innerHTML = time
  // },[time])
  // const [memoChrono, setMemoChrono] = useState(chrono);
  // const areEqualeChrono = () => {
  //   memoChrono === chrono ? true : false;
  // };

  console.log('render ClockUI ');

  return (
    <div>
      <h2 className="clock" ref={clock}></h2>
    </div>
  );
};

export default ChronoUI;
