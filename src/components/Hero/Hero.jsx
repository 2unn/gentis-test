import {
  diamond,
  diamondCircle,
  elipse,
  portrait,
  xdCircle,
  xd,
  products,
  button,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  star,
  elipseCut,
  figma,
} from "../../assets";

import "./hero.css";

const Hero = () => {
  const reviewAvatar = [avatar1, avatar2, avatar3, avatar4, avatar5];

  return (
    <div id="hero" className="container hero">
      <div className="row">
        <div className="hero__content col-lg-6 col-xxl-7 col-12">
          <h1 className="h1 hero__content-header">
            We Design Impactful Digital
            <img
              className="hero__content-img"
              src={products}
              alt="products-text"
            />
          </h1>
          <p className="text-lg hero__content-text">
            Help find solutions with intitutive and in accordance with client
            business goals. we provide a high-quality services.
          </p>
          <div className="hero__content-buttons">
            <button className="button">Contact us</button>
            <div className="hero__content-button-play">
              <img src={button} alt="play-icon" />
              <p className="">
                Watch our <br /> introduction
              </p>
            </div>
          </div>
        </div>
        <div className="hero__img-wrapper col-xxl-5 col-lg-6 col-12">
          <img src={portrait} alt="" className="hero__img-portrait" />
          <img src={elipse} alt="" className="hero__img-elipse" />
          <div className="hero__img-diamond">
            <img src={diamond} alt="diamond" />
            <img src={diamondCircle} alt="diamond_circle" />
          </div>
          <div className="hero__img-xd">
            <img src={xd} alt="xd" />
            <img src={xdCircle} alt="xd_circle" />
          </div>
          <img src={figma} alt="xd" className="hero__img-figma" />

          <div className="hero__img-review">
            <div className="hero__img-avatar-box">
              {reviewAvatar.map((el) => (
                <img key={el} src={el} alt={el} className="hero__img-avatar" />
              ))}
            </div>
            <p className="text-lg">
              <span>120</span>+ Employees
            </p>
            <div className="hero__img-review-count">
              <div>
                <img
                  src={star}
                  alt="star-icon"
                  className="hero__img-start-icon"
                />
              </div>
              5.0 (3.1K Reviews)
            </div>
            <img
              src={elipseCut}
              alt="elipse_cut"
              className="hero__img-elipse-cut"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
