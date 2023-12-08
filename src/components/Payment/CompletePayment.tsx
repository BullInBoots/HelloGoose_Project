import NavigationBar from "../../components/NavigationBar";
import CheckoutHeader from "../../components/Checkout/CheckoutHeader";
import { Link } from "react-router-dom";
import { UserAccountType } from "../../types/UserAccountType";
import ThankYou from "../../components/ThankYou";
import ProductSummary from "../Checkout/ProductSummary";
import Footer from "../Footer";


const CompletePayment = () => {
    const userData: UserAccountType = JSON.parse(
      localStorage.getItem("user") || "{}"
    );
    
    const pendingCart = userData.pendingCart.map((item) => item.product.name);
    
    const pending_product = pendingCart.join(", ");
    return (
    <>
      <NavigationBar />
      <div className="flex max-w-[1140px] mx-auto my-7 gap-12">
        <div className="w-[444px] flex-auto mr-auto">
          <CheckoutHeader label="Product" atStep={4} />
          <div className="flex justify-center items-center mt-16 mb-12">
            <img src="/icons/payment-success.svg" alt="logo" />
          </div>
          <div className="text-center mb-16">
            <div className="font-semibold text-2xl font-Poppins">
              Payment Confirmed
            </div>
            <div className="text-primary">Order #8232</div>
          </div>
          <div className="flex justify-center">
            <Link to="/home">
              <button className="bg-primary px-12 py-2 text-white font-Roboto rounded-md text-lg">
                Back to shopping
              </button>
            </Link>
          </div>
          <div className="flex justify-center my-6">
            <Link
              to=""
              className="text-primary underline underline-offset-4 font-Inter"
            >
              Print receipt
            </Link>
          </div>
          <ThankYou name={pending_product} />
        </div>

        <div className="min-w-[628px] h-fit bg-tertiary rounded-md p-8">
          <ProductSummary />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompletePayment;
