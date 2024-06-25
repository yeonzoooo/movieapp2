import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="">
          인기순
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </a>
        <a href="">
          평점순
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </a>
        <a href="">
          최신순
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </a>
      </div>
    </nav>
  );
}
