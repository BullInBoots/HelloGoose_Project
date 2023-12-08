import NavigationBar from "../components/NavigationBar";
import CheckoutHeader from "../components/Checkout/CheckoutHeader";
import CheckoutFormHeader from "../components/Checkout/CheckoutFormHeader";
import { Link } from "react-router-dom";
import ProductSummary from "../components/Checkout/ProductSummary";
import Footer from "../components/Footer";

const Payment = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex max-w-[1140px] mx-auto my-7 gap-12">
        <div className="w-[444px] flex-auto mr-auto">
          <CheckoutHeader label="Product" atStep={4} />
          <div className="border border-p-secondary p-3 rounded-lg my-10">
            <div className="flex justify-between">
              <div className="text-p-secondary font-Inter">Contact</div>
              <div className="text-accent font-Inter">Edit</div>
            </div>
            <hr className="my-3 text-p-secondary" />
            <div className="flex justify-between">
              <div className="text-p-secondary font-Inter">Ship to</div>
              <div className="text-accent font-Inter">Edit</div>
            </div>
            <hr className="my-3 text-p-secondary" />
            <div className="flex justify-between">
              <div className="text-p-secondary font-Inter">Method</div>
              <div className="text-accent font-Inter">Edit</div>
            </div>
          </div>

          <CheckoutFormHeader left="Payment Method" />
          <div className="border border-p-secondary p-3 rounded-lg my-4 w-4/5">
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  checked
                  className="appearance-none w-3 h-3 outline outline-1 outline-p-secondary outline-offset-1 rounded-full"
                  type="checkbox"
                />
                <div className="text-black font-Inter ml-2">
                  cash on delivery
                </div>
              </div>
            </div>
            <hr className="my-3 text-p-secondary" />
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  checked
                  className="appearance-none w-3 h-3 outline outline-1 outline-p-secondary outline-offset-1 checked:bg-primary rounded-full"
                  type="checkbox"
                />
                <div className="text-black font-Inter ml-2">scan QR code</div>
              </div>
            </div>
          </div>

          <CheckoutFormHeader left="Billing address" />
          <div className="border border-p-secondary p-3 rounded-lg my-4 w-4/5">
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  checked
                  className="appearance-none w-3 h-3 outline outline-1 outline-p-secondary outline-offset-1 checked:bg-primary rounded-full"
                  type="checkbox"
                />
                <div className="text-black font-Inter ml-2">
                  Same as the shipping address
                </div>
              </div>
            </div>
            <hr className="my-3 text-p-secondary" />
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  checked
                  className="appearance-none w-3 h-3 outline outline-1 outline-p-secondary outline-offset-1 rounded-full"
                  type="checkbox"
                />
                <div className="text-black font-Inter ml-2">
                  Use a different address for billing
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12 w-4/5">
            <Link
              to="/shipping"
              className="text-primary underline underline-offset-4 font-Inter"
            >
              Back to shipping
            </Link>
            <Link to="/complete">
              <button className="bg-primary px-10 py-2 text-white font-Roboto font-medium rounded-lg">
                Pay now
              </button>
            </Link>
          </div>
        </div>
        <div className="min-w-[628px] h-fit bg-tertiary rounded-md p-8">
          <ProductSummary />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
