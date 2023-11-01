import { fbIcon1, fbIcon2, fbIcon3, fbIcon4, emailIcon } from "../../assets";

import "./services.css";

const Services = () => {
  return (
    <div id="services" className="container services">
      <div className="row">
        <div className=" col-md-6 col-xxl-5 col-12 services__contact">
          <h2 className="h2">How we can help you</h2>
          <p className="text-lg">
            Follow our newsletter. We will regulary update our latest project
            and availability.
          </p>
          <div className="services__contact-input">
            <div className="d-flex">
              <img src={emailIcon} alt="email-icon" />
              <input
                className="services__contact-email text-md"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <div className="services__contact-btn">
              <button className="button btn-desktop">Subscribe</button>
              <button className="button btn-mobile">Sub</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 offset-xxl-1 services__list">
          <div className="row">
            <div className="col-6">
              <img src={fbIcon1} alt="" />
              <h4 className="h4">UI/UX Design</h4>
              <p className="text-sm">
                Sometimes features require
                <br /> a short description
              </p>
            </div>
            <div className="col-6">
              <img src={fbIcon4} alt="" />
              <h4 className="h4">Logo Branding</h4>
              <p className="text-sm">
                Sometimes features require
                <br /> a short description
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img className="services__list-icon" src={fbIcon2} alt="" />
              <h4 className="h4">App Design</h4>
              <p className="text-sm">
                Sometimes features require
                <br /> a short description
              </p>
            </div>
            <div className="col-6">
              <img src={fbIcon3} alt="" />
              <h4 className="h4">Webiste Design</h4>
              <p className="text-sm">
                Sometimes features require
                <br /> a short description
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
