import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="spinner text-center">
        <div className="spinner-grow spin" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
