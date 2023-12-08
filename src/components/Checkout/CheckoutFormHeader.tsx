import React from 'react'

interface CheckoutFormHeaderProps {
    left: string;
    right?: React.ReactNode;
}

const CheckoutFormHeader = ({left, right}: CheckoutFormHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-Poppins font-semibold text-2xl text-util">{left}</div>
      <div>{right}</div>
    </div>
  );
}

export default CheckoutFormHeader