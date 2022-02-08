import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useDebugValue,
} from 'react';

var dateTimeFormat1 = new Intl.DateTimeFormat('fr-FR', {
  // hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  fractionalSecondDigits: 2,
  hour12: false,
});

export const useChrono = (ref) => {

  const [isCancelled, setCancelled] = useState(true);
  const [date, setDate] = useState(new Date(Date.UTC(0, 0, 0, 0, 0, 0, 0)));
  const [chronos, setChronos] = useState([]);

  const snapChrono = useCallback(() => {
    if (isCancelled) return;
    setChronos((prev) => [...prev, dateTimeFormat1.format(date)]);
    console.log('snapChrono, isCancelled', isCancelled, ' CRONOS:', chronos);
    return chronos;
  }, [chronos, date, isCancelled]);

  // stop and reset
  const stopChrono = useCallback(() => {
    ref.current.style = '';
    setCancelled(true);
    setDate(new Date('1970-01-01'));
    console.log('StopChrono, isCancelled', isCancelled);
  }, [isCancelled]);

  const playChrono = useCallback(() => {
    if (!isCancelled) return;
    ref.current.style = 'color:#18D860; background-color: #f5f5f5';
    setCancelled(false);
    setChronos((prev) => []);
    console.log('playChrono, isCancelled', isCancelled);
  }, [isCancelled, chronos]);

  const pauseChrono = useCallback(() => {
    ref.current.style.color = 'crimson';
    setCancelled(true);
    console.log('pauseChrono, isCancelled', isCancelled);
  }, [isCancelled]);

  // increment the chrono with 10 milliseconds
  const updateChrono = useCallback(() => {
    if (!isCancelled)
      setDate((prev) => {
        // console.log('prev ', prev.getMilliseconds());
        return new Date(prev.getTime() + 10);
      });
  }, [isCancelled]);

  useLayoutEffect(() => {
    console.log('-------------- useEffect, isCancelled:', isCancelled);
    let tic = null;
    if (!isCancelled) {
      tic = setInterval(updateChrono, 10);
    } else clearInterval(tic);
    return () => {
      console.log('----------- CLEANUP FUNCTION CLEAR INTERVAL');
      clearInterval(tic);
    };
  }, [isCancelled, chronos]);

  useDebugValue(chronos ?? 'click Get button');

  return {
    chrono: dateTimeFormat1.format(date),
    chronos,
    stopChrono,
    playChrono,
    pauseChrono,
    snapChrono,
  };
};
