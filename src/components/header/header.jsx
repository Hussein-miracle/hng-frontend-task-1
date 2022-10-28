import "./header.scss";
import profileImg from "../../assets/profile__img.png";
import cam from "../../assets/camera-icon.svg";

const Header = () => {
  return (
    <header className='header'>

      
      <div className="header__img--container">
      <img alt="profile_img"  src={profileImg} className="header__img"/>

      <div className="header__hover-effect">
        <img src={cam} alt="camera-icon" className=".img"/>
      </div>
      </div>
      <span className="header__name">Abdullahi.ts</span>
      <span aria-hidden={true} id="slack">hussein_miracle</span>
    </header>
  )
}

export default Header;