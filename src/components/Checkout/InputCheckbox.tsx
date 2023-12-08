
interface InputCheckboxProps {
    label:string;
}

const InputCheckbox = ({label}: InputCheckboxProps) => {
  return (
    <div className="flex items-center mt-1">
      <input type="checkbox" className="mr-2 font-Inter text-sm text-util" />
      <label>{label}</label>
    </div>
  );
}

export default InputCheckbox