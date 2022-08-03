import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = React.useState('');
  function fetchData() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='btn' onClick={fetchData}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
