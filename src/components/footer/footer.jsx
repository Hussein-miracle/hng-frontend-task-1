import "./footer.scss";
import zuri from "../../assets/Zuri.Internship_Logo.svg";
import ingressive from "../../assets/ingressive.svg";
import github from "../../assets/github-icon.svg";
import slack from "../../assets/slack-icon.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__header">
        <a href="#" alt="slack-link"> <img src={slack} alt="slack_icon"/> </a>
        <a href="https://github.com/Hussein-miracle" alt="github_link"> <img src={github} alt="github_icon"/> </a>
      </div>

      <div className="footer__main">
        <a><img src={zuri} alt="zuri_logo" /></a>
        
        <span>HNG Internship 9 Frontend Task</span>
        <a><img src={ingressive} alt="ingressive" /></a>
      </div>
    </footer>
  );
};

export default Footer;
