import React from "react";
import "./style.scss";
import { Link, graphql, useStaticQuery } from "gatsby";
import ExtraitCategory from "../ExtraitCategory";

const PortfolioSection = () => {
  /* Query for 9 photos */
  const ninePhotos = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "nine-square-homepage" } } }
          }
        }
        sort: { date: ASC }
      ) {
        edges {
          node {
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }
  `);

  const imagesNinePhotos = ninePhotos.allWpPost.edges.map(({ node }: any) => ({
    mediaItemUrl: node.featuredImage?.node?.mediaItemUrl,
    title: node.featuredImage?.node?.title,
  }));

  return (
    <section id="portfolio">
      <h2 className="sixCaps" data-aos="fade-down">
        Mampii Portfolio
      </h2>
      <ExtraitCategory />
      <div className="portfolio-wrapper">
        <div className="images" data-aos="zoom-in">
          {imagesNinePhotos.map((imagesninephoto: any, index: any) => {
            return (
              <img
                src={imagesninephoto.mediaItemUrl}
                alt={imagesninephoto.title}
                key={index}
              />
            );
          })}
        </div>
        <div className="textDescription" data-aos="zoom-in">
          <h2 className="sixCaps">Artistic approach</h2>
          <p>
            In every shot I capture, I weave the threads of a unique story,
            where emotions come to life and precious moments are frozen for
            eternity. Each image is a window onto my journey, revealing moments
            of happiness, challenges overcome and dreams in the making. My lens
            becomes my pen, and my photos become the words that compose the
            visual chapters of my existence. Each shot tells a part of me,
            fragments of emotions captured in a harmonious dance of light and
            shadow.
          </p>
          <Link to="/folio" className="view-more">
            View more
          </Link>
        </div>
        <Link to="/folio" className="view-more mobile-v">
          View more
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
