import "./repoitem.css";
import hyperLink from "../assets/Icons _ Illustrations/north_east-24px.svg";

export default function RepoItem(props) {
  return (
    <div className="repoItem">
      <div className="propVal">
        <h2 className="propName">{props.name}</h2>
        <img src={hyperLink} alt="" className="hyperLink"/>
        <h4 className="propDate">Updated on {props.date}</h4>
      </div>
      <h3 className="propDes">{props.des}</h3>
    </div>
  );
}
