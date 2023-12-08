
interface InputTextProps {
    placeholder: string;
    size?: number;
    type?: string;
}

const InputText = ({placeholder, size=1, type='text'}:InputTextProps) => {
  return (
    <input size={size} placeholder={placeholder} type={type} className='block flex-auto mt-3 px-2 h-10 border border-p-secondary text-util'/>
  )
}

export default InputText