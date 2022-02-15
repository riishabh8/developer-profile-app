import { Link } from "react-router-dom";
import Item from "../item/Item";
import "./items.css";

export default function Items({ profiles }) {
  return (
    <div className="items grid">
      {profiles.map((p) => (
        <Link to="/profile" className="col-md-6 col-sm-6 item" key={p.id} >
        <Item id={p.id} img={p.avatar_url} key={p.id} />
        </Link>
      ))}
    </div>
  );
}
