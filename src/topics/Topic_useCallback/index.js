import React, { Fragment, useState } from "react";
import Todo from "./Todo";

const Learnusecallback = () => {
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    setCount(count + 1);
  };
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="col-md-12 text-center">
          <h1>Learn useCallback</h1>
          <Todo />
          <h5>{`Count Value is ${count}`}</h5>
          <button onClick={handleIncreament}>INcreament</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Learnusecallback;
