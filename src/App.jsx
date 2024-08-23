import { useEffect, useState } from 'react';
import patternDivider from './assets/pattern-divider-desktop.svg';
import dice from './assets/icon-dice.svg';
import './App.css';

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const json = await response.json();
    setAdvice(json);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-DarkBlue font-manrope">
      {advice.slip ? (
        <div className="relative sm:bg-DarkGrayishBlue  bg-GrayishBlue rounded-md max-w-lg p-8 flex flex-col justify-center items-center">
          <div className="text-NeonGreen mt-4 mb-4 tracking-widest font-extrabold">
            ADVICE #{advice.slip.id}
          </div>
          <div className="text-white text-center font-extrabold text-[28px] mb-4">
            "{advice.slip.advice}"
          </div>
          <div className="mb-8 mt-4">
            <img src={patternDivider} alt="" />
          </div>
          <div className="absolute bottom-[0px] mt-4">
            <div className="bg-NeonGreen rounded-full p-4 transform translate-y-1/2 cursor-pointer glow">
              <img src={dice} onClick={handleClick} alt="dice" />
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
