import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section className="counter">
      <div>
        <p
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          {counter > 0 ? "-" : ""}
        </p>
        <div>
          <p>{counter}</p>
        </div>
        <p
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          {counter !== 10 ? "+" : ""}
        </p>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </section>
  );
};

export default Counter;
