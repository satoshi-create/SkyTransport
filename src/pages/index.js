import { Link } from 'gatsby'
import React from 'react'
import "../main.css"
import logoImg from "../images/logo.png"

const index = () => {
  return (
    <div>
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
      <div className="hero">
        <h1>ソラから宅配を変えるチャレンジ</h1>
        <button className="btn">事業を見る</button>
        <img alt="droon" />
      </div>
      <section className="msg">
        <h2>陸からソラヘ</h2>
        <p>いま、宅配便の世界は、大きな変化を遂げようとしています。ドローンをはじめとするテクノロジーの発展、インターネットの普及、ロジスティクスの充実――先端的な技術を組み合わせることで、陸だけではなく空からの輸送が現実のものとなりつつあります。当社はドローンを活用した宅配便ネットワークの可能性を探ってまいります</p>
      </section>
      <section className="services">
        <div className="section-title">
          <img alt="droon-icon" />
          <h2>services</h2>
        </div>
        <div className="item-boxs">
          <div className="item-box">
            <img src="city" />
            <h3>都市エリア</h3>
            <p>東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。</p>
          </div>
          <div className="item-box">
            <img src="local-city" />
            <h3>地方エリア</h3>
            <p>東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。</p>
          </div>
          <div className="item-box">
            <img src="island" />
            <h3>離島エリア</h3>
            <p>東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。</p>
          </div>
        </div>
      </section>
      <section className="company">
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
