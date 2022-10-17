import { useEffect, useState } from "react";
import Modals from "../pages/Modals";

const Timer = ({timeSelected}) => {

    const [timeLeft, setTimeLeft] = useState({
        m: timeSelected,
        s: 0,
      });

    useEffect(() => {
  
        const intervalId = setInterval(() => {
          if (timeLeft.s == 0) {
            setTimeLeft({ ...timeLeft, s: 60 });
            setTimeLeft((prev) => ({ ...prev, m: prev.m - 1 }));
            setTimeLeft((prev) => ({ ...prev, s: prev.s - 1 }));
          } else if (timeLeft.s < 60) {
            setTimeLeft((prev) => ({ ...prev, s: prev.s - 1 }));
          }
  
        }, 1000);
      
    
        if(timeLeft.s ==0 && timeLeft.m == 0) {
            clearInterval(intervalId)
            // showModal()
            
        }
  
      console.log(`${timeLeft.m}:${timeLeft.s}`);
  return ()=>clearInterval(intervalId)
  
    }, [timeLeft.m, timeLeft.s]);

  return (
    <>
      {timeLeft.m}
      <span>m</span>:{timeLeft.s}
      <span>s</span>
    </>
  );
};

export default Timer;