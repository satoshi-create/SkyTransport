import { Link } from "gatsby";
import React from "react";
import droonIcon from "../images/droon-icon.svg";
import Button from "../components/Button";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import socialLinks from "../data/socialLInks";

const index = () => {
  return (
    <Layout>
      <Seo title="home" />
      <section className="msg partsGrid">
        <div className="grid12">
          <h2>陸からソラヘ</h2>
          <p>
            いま、宅配便の世界は、大きな変化を遂げようとしています。ドローンをはじめとするテクノロジーの発展、インターネットの普及、ロジスティクスの充実――先端的な技術を組み合わせることで、陸だけではなく空からの輸送が現実のものとなりつつあります。当社はドローンを活用した宅配便ネットワークの可能性を探ってまいります
          </p>
        </div>
      </section>
      <section className="services partsGrid">
        <div className="section-title">
          <img src={droonIcon} alt="droon-icon" />
          <h2>services</h2>
          <div className="underline"></div>
        </div>
        <div className="item-boxs grid12">
          <div className="item-box">
            <StaticImage
              alt="city"
              src="../images/city.png"
              placeholder="blurred"
            />
            <h3>都市エリア</h3>
            <p>
              東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。
            </p>
            <Link to="/">
              <Button children={"事業を見る"} />
            </Link>
          </div>
          <div className="item-box">
            <StaticImage
              alt="local-city"
              src="../images/local-city.png"
              placeholder="blurred"
            />
            <h3>地方エリア</h3>
            <p>
              東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。
            </p>
            <Link to="/">
              <Button children={"事業を見る"} />
            </Link>
          </div>
          <div className="item-box">
            <StaticImage
              alt="island"
              src="../images/island.png"
              placeholder="blurred"
            />
            <h3>離島エリア</h3>
            <p>
              東京を中心とした都市部で、ドローン宅配の実証実験をおこなっています。
            </p>
            <Link to="/">
              <Button children={"事業を見る"} />
            </Link>
          </div>
        </div>
      </section>
      <section className="company partsGrid">
        <figure className="company-fig">
          <StaticImage
            alt="map-company"
            src="../images/map-company.png"
            className="company-img"
            placeholder="tracedSVG"
          />
        </figure>
        <div className="section-title">
          <img src={droonIcon} alt="droon-icon" />
          <h2>company</h2>
          <div className="underline"></div>
        </div>
        <div className="grid12">
          <dl className="text grid12">
            <dt>会社名</dt>
            <dd>Sky Transport 株式会社</dd>
            <dt>代表者</dt>
            <dd>宅配 太郎</dd>
            <dt>所在地</dt>
            <dd>〒194-0021 東京都町田市中町1丁目19-6</dd>
            <dt>電話番号</dt>
            <dd>000-000-0000</dd>
            <dt>営業時間</dt>
            <dd>平日9:00-18:00（土日祝は休業）</dd>
            <dt>設立</dt>
            <dd>2015年1月1日</dd>
            <dt>事業内容</dt>
            <dd>
              ◎ドローンを活用した新しい物流ネットワークの構想
              <br />
              ◎宅配便請負業
            </dd>
          </dl>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16015.911668844696!2d139.75838595217266!3d32.45727148252255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x606ab9eeec9d5885%3A0xfce799613c77e5f!2z5aSn5Ye46YOo5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1638261974883!5m2!1sja!2sjp"
            className="map"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section className="contact partsGrid">
        <figure className="contact-fig">
          <StaticImage
            alt="map-contact"
            src="../images/map-contact.png"
            className="contact-img"
            placeholder="tracedSVG"
          />
        </figure>
        <div className="double-border grid12">
          <div className="section-title">
            <img src={droonIcon} alt="droon-icon" />
            <h2>contact</h2>
            <div className="underline"></div>
          </div>
          <p className="text">
            疑問、質問がありましたらお気軽にご連絡ください。
          </p>
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
                <input type="email" name="email" placeholder="メールアドレス" />
              </label>
            </p>
            <p>
              <label>
                <span className="sr-only">メッセージ</span>
                <textarea type="text" name="message" placeholder="メッセージ" />
              </label>
            </p>
            <p>
              <input type="submit" value="送信" className="btn btn-comp" />
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default index;
