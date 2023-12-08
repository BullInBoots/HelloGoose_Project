import React from 'react'

interface QuantityButtonProps {
    label?: string;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityButton = ({label, count, setCount}: QuantityButtonProps) => {
    
    const increment = (e: React.MouseEvent) => {
      e.preventDefault();
      if (count != null || undefined) {
        setCount(count + 1);
      }
    }

    const decrement = (e: React.MouseEvent) => {
      e.preventDefault();
      if (count != null || undefined) {
        count <= 0 ? setCount(0) : setCount(count - 1);
      }
    }
    
  return (
    <>
      <div>
        <div className=' font-Inter font-medium text-sm'>{label}</div>
        <div className=" w-[76px] h-[30px] flex justify-around items-center border-2 border-secondary">
          <button
            onClick={increment}
            className="h-full hover:bg-secondary hover:text-white flex-1"
          >
            +
          </button>
          <span className="flex-1 text-center">{count}</span>
          <button
            onClick={decrement}
            className="h-full hover:bg-secondary hover:text-white flex-1"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default QuantityButton