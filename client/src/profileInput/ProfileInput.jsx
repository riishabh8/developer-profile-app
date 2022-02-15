import "./profileInput.css";

export default function ProfileInput(props) {
  return (
    <div className="profileInput">
      <img
        className="profileInputImg"
        src={require(`../assets/Profile_Icons/${props.name}.png`)}
        alt=""
      />
      <p className={`profileInputLabel ${props.class}`}>{props.name}</p>
      <br />
      <input type="text" className="profileInputTxt" required />
    </div>
  );
}
