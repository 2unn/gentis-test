import { airbnb, amazon, creative, google, shopify } from "../../assets";
import "./companies.css";

const Companies = () => {
  const logoImg = [google, airbnb, creative, shopify, amazon];
  return (
    <div className="companies">
      <div className="container">
        <h4 className="companies__text">Trusted by greatest companies</h4>
        <div className="companies__logo-wrapper">
          {logoImg.map((el) => (
            <div key={el} className="">
              {" "}
              <img src={el} alt="logo" />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
