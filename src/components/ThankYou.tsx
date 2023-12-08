interface ThankYouprops {
  name: string;
}

const ThankYou = ({ name }: ThankYouprops) => {
  return (
    <div>
      Thank you John for buying {name}. Once your order is confirmed. It will be
      ready to ship. Please check your inbox in the future for updates to your
      order.
    </div>
  );
};

export default ThankYou;