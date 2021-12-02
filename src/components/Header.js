import React, { useContext } from "react";
import { Link } from "gatsby";
import logoImg from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { GatsbyContext } from "../context/context.js";

const Header = () => {
  const { isSidebar, openSidebar } = useContext(GatsbyContext);
  console.log(isSidebar);
  return (
    <header className="heading headingGrid">
      <div className="grid12">
        <img src={logoImg} alt="logo" className="logo" />
        <div className="site-title">SkyTransport</div>
        <button className="nav-icon btn" onClick={openSidebar}>
          <FiMenu />
        </button>
        <ul className="nav-menu">
          <li>
            {" "}
            <Link to="/">ホーム</Link>
          </li>
          <li>
            {" "}
            <Link to="/">事業概要</Link>
          </li>
          <li>
            {" "}
            <Link to="/">お問い合わせ</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
