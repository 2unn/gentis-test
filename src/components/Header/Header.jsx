import { headerLink } from "../../constants";
import { logo, menu, closeIcon } from "../../assets";
import "./header.css";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-desktop">
          <a href="#" className="header__logo ">
            <img src={logo} alt="" />
          </a>
          <ul className="header__menu">
            {headerLink.map((el) => (
              <li key={el.title} className="header__menu-item text-md">
                {" "}
                <a href={el.link}>{el.title}</a>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="header-mobile">
          <a href="#" className="header__logo ">
            <img src={logo} alt="" />
          </a>
          <img
            className={`header-mobile__menu-icon ${
              isMenuOpen ? "menu-icon-hidden" : "menu-icon-visible"
            }`}
            src={menu}
            alt=""
            onClick={() => setIsMenuOpen(true)}
          />
          <img
            className={`header-mobile__close-icon ${
              isMenuOpen ? "close-visible" : "close-hidden"
            }`}
            src={closeIcon}
            alt=""
            onClick={() => setIsMenuOpen(false)}
          />
          <ul
            className={`header__menu ${
              isMenuOpen ? "menu-visible" : "menu-hidden"
            }`}
          >
            {headerLink.map((el) => (
              <li key={el.title} className="header__menu-item text-md">
                {" "}
                <a href={el.link}>{el.title}</a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
