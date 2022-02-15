import Footer from "../footer/Footer";
import RepoItem from "../RepoItem/RepoItem";
import "./profile.css";
import devLogo from "../assets/Icons _ Illustrations/account_circle-24px.svg";
import location from "../assets/Icons _ Illustrations/location_on-24px.svg";
import link from "../assets/Icons _ Illustrations/link.svg";
import buisness from "../assets/Icons _ Illustrations/business-24px.svg";
import email from "../assets/Profile_Icons/email.svg";
import { Link } from "react-router-dom";

export default function Profile(props) {
  console.log(props.msg);
  return (
    <div className="profile">
      <div className="profileHeader">
        <h2>The Developer Profile</h2>
        <Link to="/" className="link"><h2>All Developers</h2></Link>
      </div>
      <div className="devInfo">
        <img src={devLogo} alt="devLogo" className="devLogo" />
        <div className="devDes">
          <h1 className="devName">Gaurav Chandak</h1>
          <p className="devExp">
            Building workat.tech;
            <br />
            Previously Software Engineer at @flipkart, @microsoft and @amazon
          </p>
          <div className="socialLinks">
            <img src={require("../assets/Profile_Icons/codechef.png")} alt="" />
            <img
              src={require("../assets/Profile_Icons/hackerrank.png")}
              alt=""
            />
            <img src={require("../assets/Profile_Icons/github.png")} alt="" />
            <img src={require("../assets/Profile_Icons/linkedin.png")} alt="" />
            <img src={require("../assets/Profile_Icons/medium.png")} alt="" />
            <img src={require("../assets/Profile_Icons/twitter.png")} alt="" />
            <img src={email} alt="" />
          </div>
          <div className="links">
            <p>
              <img src={location} alt="location" /> Banglore
              <img src={buisness} alt="buisness" /> workat.tech
              <img src={link} alt="link" />
              http://workat.tech
            </p>
          </div>
        </div>
      </div>
      <div className="repoList container">
        <h2 className="repoHeader">Github repositories</h2>
        <RepoItem name={"code-template"} date={"9 July 2020"} />
        <RepoItem
          name={"get-a-software-engineering-job"}
          date={"9 july 2020"}
          des="Get a Software Engineering Job - Ultimate Guide"
        />
      </div>
      <Footer />
    </div>
  );
}
