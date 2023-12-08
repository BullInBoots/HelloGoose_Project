import Footer from "../components/Footer";
import HomeItemList from "../components/Home/HomeItemList";
import NavigationBar from "../components/NavigationBar";

const Home = () => {

  const backgroundImageStyle = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  };
  
  return (
    <>
      <NavigationBar />
      <div className="relative">
        <div
          className="w-full h-[555px]"
          style={backgroundImageStyle("/images/promotion-banner.png")}
        ></div>
        <div className="absolute py-2 flex justify-evenly bottom-0 left-1/2 w-[1200px] translate-y-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <div className="flex items-center font-Inter font-semibold text-xl">
              <embed className="mr-2" src="/icons/wallet.svg" />
              SUPER VALUE PAY
            </div>
            <div className="font-Inter font-medium">USE NOW FOR DISCOUNT</div>
          </div>

          <div className="h-20px border border-black border-opacity-30"></div>

          <div className="flex flex-col items-center">
            <div className="flex items-center font-Inter font-semibold text-xl">
              <embed className="mr-2" src="/icons/coin.svg" />
              25.00
            </div>
            <div className="font-Inter font-medium">MY COINS</div>
          </div>

          <div className="h-20px border border-black border-opacity-30"></div>

          <div className="flex flex-col items-center">
            <div className="flex items-center font-Inter font-semibold text-xl">
              <embed className="mr-2" src="/icons/coupon.svg" />
              50 +
            </div>
            <div className="font-Inter font-medium">PROMOTION CODES</div>
          </div>
        </div>
      </div>

      <HomeItemList header="SALE" isOnSale={true} />
      <HomeItemList header="NEW" />
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Home;
