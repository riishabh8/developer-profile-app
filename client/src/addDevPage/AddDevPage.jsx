import { Link } from "react-router-dom";
import ProfileInput from "../profileInput/ProfileInput";
import "./addDevPage.css";

export default function AddDevPage() {
  return (
    <div className="addDevPage">
      <div className="addDevPageHeading">Add developer profile</div>
      <div className="container">
        <ProfileInput name="github" class="github" />
        <ProfileInput name="linkedin" />
        <ProfileInput name="codechef" />
        <ProfileInput name="hackerrank" />
        <ProfileInput name="twitter" />
        <ProfileInput name="medium" />
      </div>
      <div className="addDevPageFooter">
        <button className="btnDev" type="submit">
          <Link to={"/"} className="link cancelBtn">
            Cancel
          </Link>
        </button>
        <button className="btnDev btn" type="submit">
          <Link to={"/"} className="link">
            Submit
          </Link>
        </button>
      </div>
    </div>
  );
}
