import TopNavbar from "../components/navbar/TopNavbar";
import PopularProducts from "../components/products/PopularProducts";
import ShowCase from "../components/showCase/ShowCase";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <ShowCase />
      <PopularProducts />
    </>
  );
};

export default Home;
