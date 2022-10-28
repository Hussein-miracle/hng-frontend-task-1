import "./header.scss";
import profileImg from "../../assets/profile__img.png";
import cam from "../../assets/camera-icon.svg";
import shareBtn from "../../assets/share-btn.svg";
import menuBtn from "../../assets/menu-btn.svg";

import ReactTooltip from 'react-tooltip';

const Header = () => {
  return (
    <header className="header">
      
        <div className="header__share" data-tip="Share Link">
          <img src={`${shareBtn}`}  className="share_btn"/>
          <img src={menuBtn} className="menu_btn" />
        </div>


      <div className="header__img--container">
        <img alt="profile_img" src={profileImg} className="header__img" />

        <div className="header__hover-effect">
          <img src={cam} alt="camera-icon" className="svg" />
        </div>
      </div>
      <span className="header__name">Abdullahi.ts✨🚀</span>
      <span aria-hidden={true} id="slack">
        hussein_miracle
      </span>
      <ReactTooltip/>
    </header>
  );
};

export default Header;
