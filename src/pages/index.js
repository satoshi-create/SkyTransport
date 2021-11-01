import { Link } from 'gatsby'
import React from 'react'
import "../main.css"
import logoImg from "../images/logo.png"
import droonImg from "../images/droon.png"
import droonIcon from "../images/droon-icon.svg"
import cityImg from "../images/city.png"
import localCityImg from "../images/local-city.png"
import islandImg from "../images/island.png"
import Button from './components/Button'

const index = () => {
  return (
    <div>
      <header className="heading headingGrid">
        <div className="grid12">
          <img src={logoImg} alt="logo" className="logo" />
          <div className="site-title">SkyTransport</div>
          <button className="nav-icon">nav</button>
          <ul className="nav-menu">
            <li> <Link to="/">ホーム</Link></li>
            <li> <Link to="/">事業概要</Link></li>
            <li> <Link to="/">お問い合わせ</Link></li>
          </ul>
        </div>
      </header>
      <section className="hero partsGrid">
        <div className="grid12">
          <h1>
            <span class="zen sora1">ソ</span>
            <span class="zen sora2">ラ</span>
            から宅配を<br />
            変えるチャレンジ
          </h1>
          <Button children={"事業を見る"}/>
          <figure>
            <img src={droonImg} alt="droon" />
          </figure>
        </div>
      </section>
      <section className="msg partsGrid">
        <div className="grid12">
          <h2>陸からソラヘ</h2>
          <p>いま、宅配便の世界は、大きな変化を遂げようとしています。ドローンをはじめとするテクノロジーの発展、インターネットの普及、ロジスティクスの充実――先端的な技術を組み合わせることで、陸だけではなく空からの輸送が現実のものとなりつつあります。当社はドローンを活用した宅配便ネットワークの可能性を探ってまいります</p>
        </div>
      </section>
      <section className="services partsGrid">
        <div className="section-title">
          <img src={droonIcon} alt="droon-icon" />
          <h2>services</h2>
        </div>
        <div className="underline"></div>
        <div className="item-boxs grid12">
          <div className="item-box">
            <img src={cityImg} alt="city" />
            <h3>都市エリア</h3>
            <p>東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。</p>
            <Button children={"事業を見る"}/>
          </div>
          <div className="item-box">
            <img src={localCityImg} alt="local-city" />
            <h3>地方エリア</h3>
            <p>東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。</p>
            <Button children={"事業を見る"}/>
          </div>
          <div className="item-box">
            <img src={islandImg} alt="island" />
            <h3>離島エリア</h3>
            <p>東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。</p>
            <Button children={"事業を見る"}/>
          </div>
        </div>
      </section>
      <section className="company partsGrid">
        <div className="section-title">
          <img alt="droon-icon" />
          <h2>company</h2>
        </div>
        <dl className="text">
          <dt>用語</dt>
          <dd>用語に対する説明</dd>
          <dt>用語</dt>
          <dd>用語に対する説明</dd>
          <dt>用語</dt>
          <dd>用語に対する説明</dd>
          <dt>用語</dt>
          <dd>用語に対する説明</dd>
          <dt>用語</dt>
          <dd>用語に対する説明</dd>
          <dt>用語</dt>
          <dd>用語に対する説明</dd>
        </dl>
        <ul className="sns">
          <li><Link to="/">twitter</Link></li>
          <li><Link to="/">twitter</Link></li>
          <li><Link to="/">twitter</Link></li>
        </ul>
        <div className="map">map</div>
      </section>
      <section className="contact">
        <div className="section-title">
          <img alt="droon-icon" />
          <h2>contact</h2>
        </div>
        <div>
          <p>疑問、質問がありましたらお気軽にご連絡ください。</p>
          <form>
            <p>
              <label>
                <span className="sr-only">名前</span>
                <input type="text" name="nama" placeholder="お名前" />
              </label>
            </p>
            <p>
              <label>
                <span className="sr-only">メールアドレス</span>
                <input type="text" name="email" placeholder="メールアドレス" />
              </label>
            </p>
            <p>
              <label>
                <span className="sr-only">メッセージ</span>
                <input type="text" name="message" placeholder="メッセージ" />
              </label>
            </p>
            <p>
              <input type="submit" value="送信" className="btn" />
            </p>
          </form>
        </div>
      </section>
      <footer className="footer">
        <p>© 2021 SkyTransport all right reserved</p>
      </footer>
    </div >
  )
}

export default index
