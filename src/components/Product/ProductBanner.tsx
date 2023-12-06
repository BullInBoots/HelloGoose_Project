interface ProductBannerProps {
    bannerSrc?: string;
}

const ProductBanner = ({bannerSrc}: ProductBannerProps) => {

    const backgroundImageStyle = (imgUrl: string) => {
      return {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
    };

  return (
    <div className='rounded-3xl w-full h-[376px]' style={bannerSrc ? backgroundImageStyle(bannerSrc) : {backgroundColor: 'red'}}>
    </div>
  )
}

export default ProductBanner