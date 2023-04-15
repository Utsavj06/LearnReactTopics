import React, { useState, useEffect } from "react";
import "./click.css";
import useCustomHook from "../useCustomHook";

const CustomHookUse = () => {
  const [no, setno] = useState(0);

  useCustomHook(no);
  return (
    <>
      <div>{no}</div>
      <div className="btnDiv">
        <button className="btn" onClick={() => setno(no + 1)}>
          Click
        </button>
      </div>
    </>
  );
};

export default CustomHookUse;
