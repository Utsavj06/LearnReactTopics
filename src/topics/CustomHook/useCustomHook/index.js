import React, { useState, useEffect } from "react";

const useCustomHook = (no) => {
  useEffect(() => {
    if (no === 5) {
      alert("hi");
    }
  });
};

export default useCustomHook;
