import { mockUpProduct } from "../../public/data/mockUpProduct";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ProductDetailInfo from "../components/Product/ProductDetailInfo";
import { ProductType } from "../types/ProductType";
import { useParams } from "react-router-dom";
interface ProductDetailProps {
  productList?: ProductType[];
}

const ProductDetail = ({ productList = mockUpProduct }: ProductDetailProps) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { id } = useParams();

  const selectedProduct = productList.filter((data: ProductType) => {
    return data.id.toString() == id;
  })[0];
  console.log(selectedProduct);
  return (
    <>
      <NavigationBar />
      <ProductDetailInfo item={selectedProduct} user={user} />
      <Footer />
    </>
  );
};

export default ProductDetail;
