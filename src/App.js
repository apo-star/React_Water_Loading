import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(-30);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (count >= 110) {
    }
  }, [count]);
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => (prevCount >= 110 ? 110 : prevCount + 0.3));
      }, 1);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);
  return (
    <div
      className={`bg-[white] w-screen h-screen flex justify-center items-center overflow-hidden relative select-none`}
    >
      <div className="absolute z-50 flex flex-col gap-4 items-center">
        {" "}
        <p
          className={`text-[white] font-sans font-medium text-5xl tracking-wider ${
            count >= 110 ? "opacity-100" : "opacity-0"
          }`}
        >
          Welcome!
        </p>
        <p
          onClick={() => {
            window.location.reload();
          }}
          className={`text-[white] cursor-pointer font-sans font-light text-base translate-y- tracking-wider ${
            count >= 110 ? "opacity-100" : "opacity-0"
          }`}
        >
          Click here to reload the page & watch again ;)
        </p>
      </div>

      <div
        className={`absolute z-40 bg-gradient-to-t rounded-full from-[#0641F4] to-[#4DADEA] overflow-hidden w-60 h-60 flex items-center justify-center opacity-[${
          count >= 90 ? "100%" : "0%"
        }] transition-all duration-[800ms] ease-in-out ${
          count >= 110 ? "scale-[1000%] duration-[2000ms]" : ""
        }`}
      />

      <div className="bg-gradient-to-t rounded-full from-[#FFFFFF] to-[#bfe3ff] overflow-hidden relative w-60 h-60 flex items-center justify-center">
        <div
          className={`absolute z-30 wiggling-div w-[5000%] h-[200%] left-[-1010%] bg1 top-[${
            200 - count * 2.4
          }px]`}
        ></div>
        <div
          className={`absolute z-20 wiggling-div2 w-[5000%] h-[200%] left-[-1050%] bg2 top-[${
            200 - count * 2.4
          }px]`}
        ></div>
      </div>
    </div>
  );
}

export default App;
