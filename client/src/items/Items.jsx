import { Link } from "react-router-dom";
import Item from "../item/Item";
import "./items.css";

export default function Items() {
  return (
    <div className="items grid">
      <Link to="/profile" className="col-md-6 col-sm-12 item"> <Item/> </Link>
      <Link to="/profile" className="col-md-6 col-sm-12 item"> <Item/> </Link>
      <Link to="/profile" className="col-md-6 col-sm-12 item"> <Item/> </Link>
      <Link to="/profile" className="col-md-6 col-sm-12 item"> <Item/> </Link>
      <Link to="/profile" className="col-md-6 col-sm-12 item"> <Item/> </Link>
      <Link to="/profile" className="col-md-6 col-sm-12 item"> <Item/> </Link>
      <Link to="/profile" className="col-md-6 col-sm-12 item"> <Item/> </Link>
    </div>
  );
}
