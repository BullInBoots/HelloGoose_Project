import { Link } from 'react-router-dom';

export interface NavigationButtonProps {
    btnName: string;
    linkTo: string;
}

const NavigationButton = ({btnName, linkTo}: NavigationButtonProps) => {
  return (
    <Link to={linkTo} className={"px-1 font-Poppins uppercase font-medium leading-9 hover:border-b-2 hover:border-b-primary "}>
      {btnName}
    </Link>
  );
}

export default NavigationButton