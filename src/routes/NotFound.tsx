import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col content-center items-center h-full">
      <div className="m-auto w-96 h-content mt-auto">
        <h1 className="text-4xl">
          <br />
          404
        </h1>
        <p>
          Page not found
          <span className="link" onClick={handleGoBack}>
            Go back
          </span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
