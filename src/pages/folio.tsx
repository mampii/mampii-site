import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/folio.scss";
import GalleryPhotos from "../components/GalleryPhotos";
import AOS from "aos";
import "aos/dist/aos.css";
import { SEO } from "../components/Seo";

const FolioPage: React.FC = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.remove("hidebody");
    bodyTag?.classList.remove("main-full-h");
  }, []);

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const coverQuery = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "cover-portfolio" } } }
          }
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

  const coverphoto = coverQuery.allWpPost.edges
    .map(({ node }: any) => node.featuredImage?.node?.mediaItemUrl)
    .filter(Boolean);

  const styles = {
    backgroundImage: `url(${coverphoto[0]})`,
  };

  return (
    <Layout>
      <SEO title="Mampii - Portfolio" pathname="folio"/>
      <section className="portfolio-page">
        <div className="wrapper_folio" style={styles}>
          <div className="overlay"></div>
          <div className="home_container">
            <h1 data-aos="fade-down">Mampionona Rakotojaona</h1>
            <span data-aos="fade-up" className="sixCaps">
              Portfolio - Gallery
            </span>
          </div>
        </div>
      </section>
      <GalleryPhotos />
    </Layout>
  );
};

export default FolioPage;
