import { bitmap, bitmap1, bitmap2, bitmap3, bitmap4 } from "../../assets";

import "./product.css";
const Product = () => {
  return (
    <div id="product" className="container product">
      <div className="product__header">
        <h2 className="h2">We create world-class digital products</h2>
        <p className="text-md">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      <div className="row product__grid">
        <div className="col-md-6 col-12 product__main-product">
          <img src={bitmap} alt="" />
          <p className="text-sm product__main-product-date">
            App Design - June 20, 2022
          </p>
          <h3 className="h3">App Redesign</h3>
          <p className="text-sm">
            By information about design the world to the best instructors, heatc
            helping By information about design the world to the best
            instructors, heatc helping
          </p>
        </div>
        <div className="col-md-6 col-12 product__sub-product">
          <div className="row">
            <div className="col-6">
              <img src={bitmap1} alt="" />
              <p className="text-sm">App Design - June 20, 2022</p>
              <h4 className="h4">
                Redesign channel website <br />
                landing page
              </h4>
            </div>
            <div className="col-6">
              <img src={bitmap2} alt="" />
              <p className="text-sm">App Design - June 20, 2022</p>
              <h4 className="h4">
                New Locator App For <br />a New Company
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img src={bitmap3} alt="" />
              <p className="text-sm">App Design - June 20, 2022</p>
              <h4 className="h4">
                Rental Rooms Web <br />
                App Platform
              </h4>
            </div>
            <div className="col-6">
              <img src={bitmap4} alt="" />
              <p className="text-sm">App Design - June 20, 2022</p>
              <h4 className="h4">
                Calendar App for Big <br />
                SASS Company
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
