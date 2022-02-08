import React, { useRef } from 'react';
import { useChrono } from './useChrono';

const ChronoUI = () => {
  const digits = useRef(null);
  const { chrono, chronos, stopChrono, playChrono, pauseChrono, snapChrono } =
    useChrono(digits);

  // console.log('CHRONO UI ', chrono);

  return (
    <div id="chronomettre">
      <h2 ref={digits} className="chrono">
        {chrono}
      </h2>
      <div>
        <button
          onClick={() => {
            playChrono();
          }}
        >
          &#10073;&#10095;
        </button>
        <button
          onClick={() => {
            pauseChrono();
          }}
        >
          &#10073; &#10073;
        </button>
        <button
          onClick={() => {
            stopChrono();
          }}
        >
          &#9744;
        </button>
        <button
          onClick={() => {
            snapChrono();
          }}
        >
          GET
        </button> 
      </div>
      <div id="chronos">
        <ol>
          {chronos &&
            chronos.map((el, index) => (
              <li key={index}>
                {' '}
                <strong>{el} </strong>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default ChronoUI;
