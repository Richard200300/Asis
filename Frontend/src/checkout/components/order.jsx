import React from "react";
import OrderNav from "./orderNav";
import Contact from "./contact";
import Shipping from "./shipping";

const Order = () => {
  const [activeStep, setActiveStep] = React.useState(1); // [1,2,3]

  return (
    <div className="flex-1 h-full">
      <OrderNav activeStep={activeStep} setActiveStep={setActiveStep} />
      {activeStep === 1 && <Contact setActiveStep={setActiveStep} />}
      {activeStep === 2 && <Shipping setActiveStep={setActiveStep} />}
    </div>
  );
};

export default Order;
