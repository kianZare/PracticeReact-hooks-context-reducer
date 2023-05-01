import React, { useEffect, useRef } from "react";

// useRef() => DOM accese
// 2. to store the value of previos state !!!

const FunctionalRef = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
};

export default FunctionalRef;
