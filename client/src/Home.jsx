import AddDevButton from "./addDevButton/AddDevButton";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Heading from "./heading/Heading";
import Items from "./items/Items";
import Search from "./search/Search";

function Home() {
  return (
    <>
      <Banner />
      <Heading />
      <Search />
      <Items />
      <AddDevButton />
      <Footer />
    </>
  );
}

export default Home;
