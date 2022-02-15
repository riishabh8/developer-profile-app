import AddDevButton from "./addDevButton/AddDevButton";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Heading from "./heading/Heading";
import Items from "./items/Items";
import Search from "./search/Search";
import Axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/developers",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setProfiles(res.data);
    });
  },[]);

  return (
    <>
      <Banner />
      <Heading />
      <Search />
      <Items profiles={profiles} />
      <AddDevButton />
      <Footer />
    </>
  );
}

export default Home;
