import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleDelete = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={handleDelete}>-</button>
        <h2> {counter} </h2>
        <button onClick={handleAdd}>+</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
