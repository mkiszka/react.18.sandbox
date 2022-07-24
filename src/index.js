import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
}

function fib2(n) {
  if (n <= 1) {
    return [n - 1, n];
  }
  const [fNminus2, fNminus1] = fib2(n - 1);
  return [fNminus1, fNminus2 + fNminus1];
}
const FIB_INCREMENT = 'inc';
const FIB_DECREMENT = 'dec';
const FIB_RESET = 'reset';
function getInitialFibs(initialN) {
  const [prev, current] = fib2(initialN);
  return {
    prev,
    current,
    next: prev + current
  };
}


function fibonacciReducer(prevState, action) {
  switch (action.type) {
    case FIB_INCREMENT:
      return {
        n: prevState.n + 1,
        fibs: {
          prev: prevState.fibs.current,
          current: prevState.fibs.next,
          next: prevState.fibs.current + prevState.fibs.next
        }
      }
    case FIB_DECREMENT:
      return {
        n: prevState.n - 1,
        fibs: {
          prev: prevState.fibs.current - prevState.fibs.prev,
          current: prevState.fibs.prev,
          next: prevState.fibs.current
        }
      }
    case FIB_RESET:
      return { fibs: getInitialFibs(action.initialN), n: action.initialN }
    default:
      return prevState;
  }
}

function useFibonacciCounter(initialN) {
  const [fibonacci, dispatchFib] = useReducer(fibonacciReducer, 
      { fibs: getInitialFibs(initialN), n: initialN })
  //const [fibs, setFibs] = useState(getInitialFibs);
  //const [n, setN] = useState(initialN);
  //const currentFibonacciNumber = fibonacci.fibs.current;



  // function resetN() {
  //   dispatchFib({ type: FIB_RESET, initialN: initialN });

  // }

  return {
    n: fibonacci.n,
    currentFibonacciNumber: fibonacci.fibs.current,
    incrementN: () => { dispatchFib({ type: FIB_INCREMENT }); },
    decrementN: () => { dispatchFib({ type: FIB_DECREMENT }); },
    resetN: () => { dispatchFib({ type:FIB_RESET, initialN: initialN }); }

  };
}

function FibonacciCounter({ initialN }) {
  const {
    n,
    currentFibonacciNumber,
    incrementN,
    decrementN,
    resetN
  } = useFibonacciCounter(initialN);

  useEffect(() => {
    document.title = `I've calculated ${currentFibonacciNumber}`;
  }, [currentFibonacciNumber]);

  return (
    <div>
      <h1>
        fib({n}) == {currentFibonacciNumber}
      </h1>
      <button onClick={incrementN}>
        <h2>+1</h2>
      </button>
      <button onClick={decrementN}>
        <h2>-1</h2>
      </button>
      <button onClick={resetN}>
        <h2>Reset</h2>
      </button>
    </div>
  );
}

function useTimeOnPage() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setSecondsElapsed(prev => prev + 1),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return secondsElapsed;
}

function TimeOnPage() {
  const secondsElapsed = useTimeOnPage();
  return <h3>You've been watching this page for {secondsElapsed} seconds.</h3>;
}

function App() {
  const [spyOnUser, setSpyOnUser] = useState(false);
  return (
    <div className="App">
      <FibonacciCounter initialN={4} />
      <button onClick={() => setSpyOnUser(prev => !prev)}>
        Toggle spying on user
      </button>
      {spyOnUser && <TimeOnPage />}
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

