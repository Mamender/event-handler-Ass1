import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() =>{
    const checkEndOfMinute = () => {
      const currentSeconds = new Date().getSeconds();
      if (currentSeconds === 59) {
        console.log("End of minute reached.");
      }
    };

    const interval = setInterval(checkEndOfMinute, 1000);

    return () => clearInterval(interval);
  },[])

  function getTime() {
    const getDate = new Date();
    const getHours = getDate.getHours();
    const getMin = getDate.getMinutes();
    const getSec = getDate.getSeconds();
    //console.log(`${getHours}:${getMin}:${getSec}`);
    return `${getHours}:${getMin}:${getSec}`;
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="clock">{time}</div>
      </div>
    </>
  );
}

export default App;
