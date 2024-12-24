import React from 'react';
import TimeSince from './timer';
import './App.css';

const App = () => {
  const date = new Date('2024-08-20T18:30:00');

  return (
    <div className='container'>
      <header>
        <h1 className='time-text'>Contador de Tempo Juntos</h1>
      </header>
      <section className='time'>
        <TimeSince selectedDate={date}/>
      </section>
    </div>
  );
};

export default App;
