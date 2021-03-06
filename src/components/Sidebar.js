import React, { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "gatsby";
import link from "../data/link";
import { GatsbyContext } from "../context/context.js";
import socialLinks from "../data/socialLInks";

const Sidebar = () => {
  const { isSidebar, closeSidebar } = useContext(GatsbyContext);
  return (
    <div
      className={`${
        isSidebar ? "sidebar-wrapper show-sidebar" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="btn-close btn" onClick={closeSidebar}>
          <CgClose />
        </button>
        <ul className="sidebar-menu">
          {link.map((item, index) => {
            const { text, url, icon } = item;
            return (
              <li key={index}>
                {icon}
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="sns">
            {socialLinks.map((item, index) => {
              const { url, icon } = item;
              return (
                <li key={index}>
                  <Link to={url}>{icon}</Link>
                </li>
              );
            })}
          </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
