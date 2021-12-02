import React from 'react'
import { Link } from 'gatsby'
import logoImg from "../images/logo.png"

const Header = () => {
  return (
    <header className="heading headingGrid">
    <div className="grid12">
      <img src={logoImg} alt="logo" className="logo" />
      <div className="site-title">SkyTransport</div>
      <button className="nav-icon btn">nav</button>
      <ul className="nav-menu">
        <li> <Link to="/">ホーム</Link></li>
        <li> <Link to="/">事業概要</Link></li>
        <li> <Link to="/">お問い合わせ</Link></li>
      </ul>
    </div>
  </header>
  )
}

export default Header
