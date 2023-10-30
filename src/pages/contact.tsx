import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import { SEO } from "../components/Seo";

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.add("main-full-h");
    bodyTag?.classList.remove("hidebody");
  }, []);
  return (
    <Layout>
      <SEO title="Mampii - Contact" pathname="contact" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
