import NavigationBar from '../components/NavigationBar'
import CheckoutHeader from '../components/Checkout/CheckoutHeader';
import ProductSummary from '../components/Checkout/ProductSummary';
import CheckoutFormHeader from '../components/Checkout/CheckoutFormHeader';
import InputText from '../components/Checkout/InputText';
import InputCheckbox from '../components/Checkout/InputCheckbox';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const CheckoutDetail = () => {

  return (
    <>
      <NavigationBar />
      <div className="flex max-w-[1140px] mx-auto my-7 gap-12">
        <div className="w-[444px] flex-auto mr-auto">
          {/* Shipping Details header */}
          <CheckoutHeader label="Product" atStep={2} />
          <form className="flex flex-col mt-10">
            <CheckoutFormHeader
              left="Contact"
              right={
                <div className="font-Inter text-base">
                  Do you have an account?{" "}
                  <span className="text-secondary font-medium">Login</span>
                </div>
              }
            />
            <InputText placeholder="Email or mobile phone number" />
            <InputCheckbox label="Add me to ModMee newsletter for a 10% discount" />

            <div className="flex flex-col my-12">
              <CheckoutFormHeader left="Shipping Address" />
              <div className="flex justify-between gap-3">
                <InputText placeholder="Name" />
                <InputText placeholder="Second Name" />
              </div>
              <InputText placeholder="Address and number" />
              <InputText placeholder="Shipping note (optional)" />
              <div className="flex gap-3">
                <InputText placeholder="City" />
                <InputText placeholder="Postal Code" />
                <InputText placeholder="Province" />
              </div>
            </div>
            <InputCheckbox label="Save this information for a future fast checkout" />

            <Link to='/shipping'>
              <button className="mt-4 mx-auto w-fit py-2 px-11 rounded-md bg-primary text-white font-Inter text-base font-medium">
                Go to Shipping
              </button>
            </Link>
          </form>
        </div>
        <div className="min-w-[628px] h-fit bg-tertiary rounded-md p-8">
          {/* Product Summary */}
          <ProductSummary />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutDetail