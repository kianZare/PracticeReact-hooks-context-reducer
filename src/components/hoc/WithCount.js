import { useState } from "react";

const WithCounter = (WrappedComponent, incrementValue) => {
  const UpdateComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
  return UpdateComponent;
};

export default WithCounter;
