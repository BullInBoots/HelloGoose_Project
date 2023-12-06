
interface InputTextProps {
    placeholder: string;
}

const InputText = ({placeholder}:InputTextProps) => {
  return (
    <input size={1} placeholder={placeholder} type="text" className='block flex-auto mt-3 px-2 h-10 border border-p-secondary'/>
  )
}

export default InputText