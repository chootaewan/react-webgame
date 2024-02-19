import { useEffect, useRef, useState } from "react";

/* const [isRunning, setIsRunning] = useState(true);
useInterval(() => {
    console.log('hello') // callback부분
},isRunning ? 1000 : null); */

function useInterval(callback, delay) {
    const savedCallback = useRef(); //ref는 항상 새로운 콜백을 만든다라는 기능을 응용한것.

    useEffect(()=>{
        savedCallback.current = callback;
    });

    useEffect(()=>{
        function tick() { //왜 있는가. 최신 콜백만 받기 위해
            savedCallback.current();
        }

    if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }
    }, [delay]);
    return savedCallback.current;
}


export default useInterval;