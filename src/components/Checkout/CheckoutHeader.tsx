interface CheckoutHeaderProps {
    label: string;
    atStep: number;
}

const CheckoutHeader = ({label, atStep}: CheckoutHeaderProps) => {
  return (
    <div className=''>
    
    <div className="font-Inter font-semibold text-base text-util">{label}</div>
    <hr className="border-none h-[2px] bg-primary my-2" />
    <ul className='flex'>
        <li className='flex items-center font-Inter font-semibold text-sm mr-2'>
            <span className={atStep > 0 ? 'text-primary' : 'text-p-secondary'}>Cart</span>
            <span className='ml-2'>
                <embed src="/icons/arrow-toRight.svg"/>
            </span>
        </li>
        <li className='flex items-center font-Inter font-semibold text-sm mr-2'>
            <span className={atStep > 1 ? 'text-primary' : 'text-p-secondary'}>Details</span>
            <span className='ml-2'>
                <embed src="/icons/arrow-toRight.svg"/>
            </span>
        </li>
        <li className='flex items-center font-Inter font-semibold text-sm mr-2'>
            <span className={atStep > 2 ? 'text-primary' : 'text-p-secondary'}>Shipping</span>
            <span className='ml-2'>
                <embed src="/icons/arrow-toRight.svg"/>
            </span>
        </li>
        <li className='flex items-center font-Inter font-semibold text-sm mr-2'>
            <span className={atStep > 3 ? 'text-primary' : 'text-p-secondary'}>Payment</span>
        </li>
    </ul>
    </div>
  )
}

export default CheckoutHeader