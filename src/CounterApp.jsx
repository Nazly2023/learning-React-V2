import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={handleSubstract}>-</button>
        <h2> {counter} </h2>
        <button onClick={handleAdd}>+</button>
      </div>
      <button onClick={handleReset}>Reiniciar</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
