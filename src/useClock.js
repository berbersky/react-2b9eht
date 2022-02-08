import React, {useEffect } from 'react';

// Create one inctance to avoid creating a new Object each time
var dateTimeFormat1 = new Intl.DateTimeFormat('ar-DZ', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  // fractionalSecondDigits: 2,
  hour12: false,
});

const useClock = (refrence) => {
  console.log('useClock')
  const updateTime = () => {
    // using ref to avoid re-rendring by React each 1 second
    refrence.current.innerHTML = dateTimeFormat1.format(Date.now());
  };


  // useLayoutEffect(()=> updateTime(),[])
  useEffect(() => {
    // console.log('Time useEffect');
    // define a interval to update time each 1 seconds
    const tictac = setInterval(updateTime, 1000);
    // clear interval in cleaning function
    return () => {
      // console.log('clearInterval');
      clearInterval(tictac);
    };
  }, [updateTime]);

   


  // return time;
};

export default useClock;
