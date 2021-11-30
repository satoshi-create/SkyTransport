import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Error = () => {
  return (
    <Layout>
      <Seo title="error"/>
      <section className="error">
        <h1>404</h1>
        <h3>お探しのページが見つかりません</h3>
      </section>
    </Layout>
  );
};

export default Error;
