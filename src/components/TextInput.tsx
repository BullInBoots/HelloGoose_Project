import React from 'react'

interface TextInput {
    label: string;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>
}

const TextInput = ({label, input, setInput}: TextInput) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  
  return (
    <>
      <div className='flex-auto'>
        <div className=" font-Inter font-medium text-sm">
          {label}
        </div>
        <div className=" h-[30px] border-2 border-secondary px-1">
            <input onChange={onChangeHandler} type="text" value={input} className='outline-none text-sm w-full' placeholder='Ex. no veggies'/>
        </div>
      </div>
    </>
  );
}

export default TextInput