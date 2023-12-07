import { useEffect } from "react";
import InputText from "./components/Checkout/InputText";
import { mockUpUserData } from "../public/data/mockUpUserData";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  useEffect(() => {
    // Function to clear localStorage when the window is about to close
    const clearLocalStorageOnUnload = () => {
      localStorage.clear();
    };

    // Attach the event listener to the window's beforeunload event
    window.addEventListener("beforeunload", clearLocalStorageOnUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", clearLocalStorageOnUnload);
    };
  }, []);

  const onClickhandler = () => {
    console.log("set");
    const user = mockUpUserData;
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
    
  };

  return (
    <div className="h-screen flex">
      <img className="w-1/2" src="/images/login-hero.png"></img>
      <div className="flex w-1/2 items-center justify-center">
        <div className="w-[436px] mx-auto flex flex-col items-center ">
          <div className="font-Inter text-base text-primary self-end">
            Need help?
          </div>
          <div>
            <embed src="/icons/login-logo.svg" />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="font-Poppins text-2xl">Login</div>
            <div className="flex items-center font-Inter text-base text-primary">
              <div>Login with QR code</div>
              <img src="/images/login-qr.png" alt="" />
            </div>
          </div>
          <InputText placeholder="Email / Username / Phone number" size={52} />
          <InputText placeholder="Password" type="password" size={52} />
          <button
            onClick={onClickhandler}
            className="mt-4 w-full py-2 bg-accent text-white font-Roboto font-medium rounded-md"
          >
            Login
          </button>
          <div className="mt-4 w-full flex justify-between items-center">
            <div className="font-Inter text-sm text-primary self-end">
              Forgot password?
            </div>
            <div className="font-Inter text-sm text-primary self-end">
              Login with SMS
            </div>
          </div>
          <div className="w-full flex items-center justify-center my-4 font-Inter text-black text-opacity-60">
            <div className="h-px border border-black border-opacity-30 flex-auto"></div>
            <div className="mx-6">or</div>
            <div className="h-px border border-black border-opacity-30 flex-auto"></div>
          </div>
          <div className="flex justify-between w-full gap-4">
            <button className="w-[193px] py-1 border border-black rounded-md flex items-center justify-center">
              <embed src="/icons/facebook-logo.svg" className="mr-4" />
              <div className="font-Inter">Facebook</div>
            </button>
            <button className="w-[193px] py-1 border border-black rounded-md flex items-center justify-center">
              <embed src="/icons/google-logo.svg" className="mr-4" />
              <div className="font-Inter">Google</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
