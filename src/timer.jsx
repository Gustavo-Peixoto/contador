import React, { useState, useEffect } from 'react';
import { differenceInMonths,differenceInDays, differenceInHours, differenceInSeconds, differenceInMinutes} from 'date-fns';
import './timer.css'
const TimeSince = ({ selectedDate }) => {
  const [months, setMonth] = useState(0);  
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const monthsPassed = differenceInMonths(now, selectedDate);
      const daysPassed = differenceInDays(now, selectedDate) % 30;
      const hoursPassed = differenceInHours(now, selectedDate) % 24; 
      const secondsPassed = differenceInSeconds(now, selectedDate) % 60;
      const minutesPassed = differenceInMinutes(now, selectedDate) % 60; 
      setMonth(monthsPassed);  
      setDays(daysPassed);
      setHours(hoursPassed);
      setSeconds(secondsPassed);
      setMinutes(minutesPassed)
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1);

    return () => clearInterval(interval);
  }, [selectedDate]);

  const mes = () =>{
    return months;
  }

  return (
    <div className='contador'>
      <ul className='lista_contador'>
        <li>{months} meses</li>
        <li>{days} dias</li>
        <li>{hours} horas</li>
        <li>{minutes} minutos</li>
        <li>{seconds} segundos</li>
      </ul>
    </div>
  );
};

export default TimeSince;
