import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-8 h-8 border-4 border-[#FF6600] border-t-transparent rounded-full animate-spin"></div>
      <p className="font-bold text-sm color-[#60230D]">Dữ liệu đang được gửi đi ...</p>
    </div>
  );
};

export default LoadingSpinner;
