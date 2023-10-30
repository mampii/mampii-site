import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/notfound.scss";

const NotFoundPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    bodyTag?.classList.add("main-full-h");
    overlay?.classList.add("loaded");
    bodyTag?.classList.remove("hidebody");
  }, []);
  return (
    <Layout>
      <div className="notfound-wrapper">
        <h1 className="sixCaps">404 page not found</h1>
        <p>Go back to <Link to="/">Homepage</Link></p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
