import React from "react";

const LoadingComponent = ({ message }) => {
  return (
    <div className="loading">
      <p>{message}</p>
    </div>
  );
};

export default LoadingComponent;
