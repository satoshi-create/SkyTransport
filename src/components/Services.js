import React, { useContext } from "react";
import Button from "../components/Button";
import { Link } from "gatsby";
import droonIcon from "../images/droon-icon.svg";
import services from "../data/services";
import { GatsbyContext } from "../context/context.js";

const Services = () => {
  const { value, setValue } = useContext(GatsbyContext);
  const { id, cat, set } = services[value];
  return (
    <section className="services partsGrid">
      <div className="section-title">
        <img src={droonIcon} alt="droon-icon" />
        <h2>services</h2>
        <div className="underline"></div>
      </div>
      <div className="services-center">
        <div className="serveces-conteiner">
          {services.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`btn services-btn ${index === value && "active-btn"}`}
              >
                {item.cat}
              </button>
            );
          })}
        </div>
      </div>
      <div className="item-boxs grid12">
        {set.map((item, index) => {
          const { image, desc, url } = item;
          return (
            <div className="item-box">
              <img src={image} alt={cat} />
              <p>{desc}</p>
              <Link to={url}>
                <Button children={"事業を見る"} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
