import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/aboutpage.scss";
import { SEO } from "../components/Seo";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";
import logo6 from "../images/logo6.png";
import logo7 from "../images/logo7.png";
import logo8 from "../images/logo8.png";
import logo9 from "../images/logo9.png";
import logo10 from "../images/logo10.png";
import logo11 from "../images/logo11.png";
import logo12 from "../images/logo12.jpg";
import logo13 from "../images/logo13.png";
// import logo14 from "../images/logo14.jfif";
import logo15 from "../images/logo15.jpg";
import logo16 from "../images/logo16.png";
import logo17 from "../images/logo17.png";
// import logo18 from "../images/logo18.jpeg";
// import logo19 from "../images/logo19.png";
// import logo20 from "../images/logo20.png";
import logo21 from "../images/logo21.png";
import logo22 from "../images/logo22.png";
import logo23 from "../images/logo23.png";

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.add("main-full-h");
    bodyTag?.classList.remove("hidebody");
  }, []);

  const aboutphotoQuery = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "about-photo" } } } }
        }
        sort: { date: ASC }
      ) {
        edges {
          node {
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  const aboutphoto = aboutphotoQuery.allWpPost.edges
    .map(({ node }: any) => node.featuredImage?.node?.mediaItemUrl)
    .filter(Boolean);
  return (
    <Layout>
      <SEO title="Mampii - About" pathname="about" />
      <section className="aboutpage-wrapper">
        <div>
          <img src={aboutphoto[0]} alt="Mampy" />
          <div className="textabout">
            <h2 className="sixCaps">Mampionona Rakotojaona</h2>
            <p>
              My name is Rakotojaona Mampionona, photographer and entrepreneur.
              With a passion for colour and expertise in commercial, culinary,
              portrait and event photography, I began my journey alongside my
              studies at INSCAE. After graduating, I founded my own company,
              Mampii, in 2021. As a professional photographer, I offer a wide
              range of services, from corporate to image banks, including photo
              packshots, products and reports. Explore my portfolio to discover
              my captivating work and contact me to bring your photographic
              vision to life.
            </p>

            <div className="they-trust">
              <h2 className="sixCaps">They trust me.</h2>
              <ul>
                <li>
                  <img src={logo1} alt="Logo" />
                </li>
                <li>
                  <img src={logo2} alt="Logo" />
                </li>
                <li>
                  <img src={logo3} alt="Logo" />
                </li>
                <li>
                  <img src={logo4} alt="Logo" />
                </li>
                <li>
                  <img src={logo5} alt="Logo" />
                </li>
                <li>
                  <img src={logo6} alt="Logo" />
                </li>
                <li>
                  <img src={logo7} alt="Logo" />
                </li>
                <li>
                  <img src={logo8} alt="Logo" />
                </li>
                <li>
                  <img src={logo9} alt="Logo" />
                </li>
                <li>
                  <img src={logo10} alt="Logo" />
                </li>
                <li>
                  <img src={logo11} alt="Logo" />
                </li>
                <li>
                  <img src={logo12} alt="Logo" />
                </li>
                <li>
                  <img src={logo13} alt="Logo" />
                </li>
                {/* <li>
                  <img src={logo14} alt="Logo" />
                </li> */}
                <li>
                  <img src={logo15} alt="Logo" />
                </li>
                <li>
                  <img src={logo16} alt="Logo" />
                </li>
                <li>
                  <img src={logo17} alt="Logo" />
                </li>
                {/* <li>
                  <img src={logo18} alt="Logo" />
                </li>
                <li>
                  <img src={logo19} alt="Logo" />
                </li>
                <li>
                  <img src={logo20} alt="Logo" />
                </li> */}
                <li>
                  <img src={logo21} alt="Logo" />
                </li>
                {/* <li>
                  <img src={logo22} alt="Logo" />
                </li> */}
                <li>
                  <img src={logo23} alt="Logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
