import React from "react";
import "../components/Loding.css";

const Loding = () => {
  return (
    <div
      className="w-full h-[90%] flex justify-center 
      items-center mt-[10rem]"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Hold on Data is Lodin....</h1>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loding;
