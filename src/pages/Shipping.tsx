import NavigationBar from "../components/NavigationBar";
import ProductSummary from "../components/Checkout/ProductSummary";
import CheckoutHeader from "../components/Checkout/CheckoutHeader";
import CheckoutFormHeader from "../components/Checkout/CheckoutFormHeader";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Shipping = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex max-w-[1140px] mx-auto my-7 gap-12">
        <div className="w-[444px] flex-auto mr-auto">
          <CheckoutHeader label="Product" atStep={3} />
          <div className="border border-p-secondary p-3 rounded-lg my-12">
            <div className="flex justify-between">
              <div className="text-p-secondary font-Inter">Contact</div>
              <div className="text-accent font-Inter">Edit</div>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between">
              <div className="text-p-secondary font-Inter">Ship to</div>
              <div className="text-accent font-Inter">Edit</div>
            </div>
          </div>
          <CheckoutFormHeader left="Shipping method" />
          <div className="border border-p-secondary p-3 rounded-lg my-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  checked
                  className="appearance-none w-3 h-3 outline outline-1 outline-black outline-offset-1 checked:bg-primary rounded-full"
                  type="checkbox"
                />
                <div className="text-p-secondary font-Inter ml-2">
                  Standard Shipping
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12">
            <Link
              to="/details"
              className="text-primary underline underline-offset-4 font-Inter"
            >
              Back to details
            </Link>
            <Link to="/payment">
              <button className="bg-primary px-11 py-2 text-white font-Roboto font-medium">
                Go to payment
              </button>
            </Link>
          </div>
        </div>
        <div className="min-w-[628px] h-fit bg-tertiary rounded-md p-8">
          {/* Product Summary */}
          <ProductSummary />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shipping;
