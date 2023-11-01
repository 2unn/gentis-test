import {
  igIcon,
  fbIcon,
  gitIcon,
  twIcon,
  linkedinIcon,
  logoLight,
} from "../../assets";

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container ">
        <div className="footer__social-list">
          <img className="footer__social-logo" src={logoLight} alt="" />
          <div className="footer__social-items-wrapper">
            <a href="" className="footer__social-item">
              <img src={igIcon} alt="" />
            </a>
            <a href="" className="footer__social-item">
              <img src={fbIcon} alt="" />
            </a>
            <a href="" className="footer__social-item">
              <img src={twIcon} alt="" />
            </a>
            <a href="" className="footer__social-item">
              <img src={gitIcon} alt="" />
            </a>
            <a href="" className="footer__social-item">
              <img src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__menu-wrapper">
          <h4 className="h4">Company</h4>

          <div className="footer__menu">
            <ul className="footer__link-list text-sm">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Investors</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Terms of use</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
            </ul>
            <button className="button">Contact Us</button>
          </div>

          <p className="text-sm">© power 2021 - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
