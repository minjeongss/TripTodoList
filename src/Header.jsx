import "./assets/Header.css";
import rocketImage from "./assets/rocket.png";
export default function Header() {
  return (
    <h1 className="header mw">
      <img src={rocketImage} alt="" />
      <span>가자</span>
      <span>여행</span>
    </h1>
  );
}
