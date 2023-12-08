import React from 'react'

interface AddToCartButtonProps {
    submitHandler: React.MouseEventHandler;
    buttonStyle: object;
    buttonText: string;
}

const AddToCartButton = ({submitHandler, buttonStyle, buttonText}: AddToCartButtonProps) => {
  return (
    <button
      onClick={submitHandler}
      type="submit"
      className="w-full hover:bg-opacity-90 flex justify-center my-8 py-2 gap-1 rounded-md"
      style={buttonStyle}
    >
      <embed src="/icons/add-to-cart.svg" type="image/jpg"></embed>
      <span className="font-medium">{buttonText}</span>
    </button>
  );
}

export default AddToCartButton