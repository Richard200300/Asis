// Create a LoadingSpinner component (or you can use a library like react-loader-spinner)
import React from "react";

const CartLoading = () => {
  return (
    <div className="absolute inset-0 z-50 bg-[url('./assets/images/bg_img.png')]">
      <div className="flex h-full items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-t-4 border-asisDark"></div>
      </div>
    </div>
  );
};

export default CartLoading;
