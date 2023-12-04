import { Link } from 'react-router-dom';

export interface NavigationButtonProps {
    btnName: string;
    linkTo: string;
}

const NavigationButton = ({btnName, linkTo}: NavigationButtonProps) => {
  return (
    <Link to={linkTo} className={"px-1 text-black font-Inter uppercase font-medium leading-9 "}>
      {btnName}
    </Link>
  );
}

export default NavigationButton