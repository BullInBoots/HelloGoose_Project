const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-util to-primary text-white px-24 pb-12 font-Inter">
      <div className="pt-10">
        <div className="float-left">
          <h1 className="uppercase font-semibold pb-8">modmee</h1>
          <h2 className="font-semibold pb-12">Visit Help Center</h2>
        </div>
        <div className="float-right">
          <a href="" className="border-2 rounded-lg px-3 py-1">
            message
          </a>
        </div>
      </div>

      <div className="clear-both pb-16">
        <div className="flex justify-between font-medium leading-8">
          <div className="flex justify-between w-1/2">
            <ul>
              <li>Company</li>
              <li>About Us</li>
              <li>Our Offerings</li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>AI</li>
            </ul>
            <ul>
              <li>Products</li>
              <li>Food</li>
              <li>Stationery</li>
              <li>Clothes</li>
            </ul>
            <ul>
              <li>FAQS</li>
              <li>Get the app</li>
              <li>Our mission</li>
              <li>Your Impacts</li>
              <li>How it works</li>
            </ul>
          </div>
          <div className="w-1/3">
            <h3 className="uppercase text-sm font-semibold mb-2">
              subscribe to our news
            </h3>
            <div>
              <input
                type="text"
                placeholder="EMAIL ADDRESS"
                className="rounded-2xl w-4/5 mb-4 pl-4 text-sm text-black"
              />
            </div>
            <button className="uppercase bg-util font-white px-4 rounded-2xl font-light text-sm">
              subscribe
            </button>
            <h3 className="uppercase text-sm font-semibold mt-4">social</h3>
            <div>
              <ul className="flex justify-between w-1/3">
                <li>
                  <img src="/icons/instagram.svg" alt="logo" />
                </li>
                <li>
                  <img src="/icons/facebook.svg" alt="logo" />
                </li>
                <li>
                  <img src="/icons/chat-logo.svg" alt="logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="">
        <ul className="flex justify-end">
          <li className="pl-6">Privacy</li>
          <li className="pl-6">Accessibility</li>
          <li className="pl-6">Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
