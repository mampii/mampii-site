import React from "react";
import "./style.scss";
import he from "he";
import { graphql, navigate, useStaticQuery } from "gatsby";

const ExtraitCategory = () => {
  /* Query for 5 category extrait */
  const categoryData = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: {
              elemMatch: { slug: { eq: "five-extrait-category-homepage" } }
            }
          }
        }
        sort: { date: ASC }
      ) {
        edges {
          node {
            title
            content
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

  const category = categoryData.allWpPost.edges.map(({ node }: any) => ({
    title: he.decode(node.title.replace(/<\/?p>/g, "")),
    description: he.decode(node.content.replace(/<\/?p>/g, "")),
    mediaItemUrl: node.featuredImage?.node?.mediaItemUrl,
  }));

  return (
    <div className="phototype-wrapper">
      <div className="item-wrapper">
        <div className="item">
          <div
            onClick={() => navigate("/folio?cat=cinematic")}
            style={{ backgroundImage: `url(${category[0].mediaItemUrl})` }}
          >
            <div data-aos="fade-up" className="title-desc">
              <span className="sixCaps">{category[0].title}</span>
              <p className="description-photo">{category[0].description}</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/folio?cat=culinary")}
            style={{ backgroundImage: `url(${category[1].mediaItemUrl})` }}
          >
            <div data-aos="fade-up" className="title-desc">
              <span className="sixCaps">{category[1].title}</span>
              <p className="description-photo">{category[1].description}</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div
            onClick={() => navigate("/folio?cat=portrait")}
            style={{ backgroundImage: `url(${category[2].mediaItemUrl})` }}
          >
            <div data-aos="fade-up" className="title-desc">
              <span className="sixCaps">{category[2].title}</span>
              <p className="description-photo">{category[2].description}</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div
            onClick={() => navigate("/folio?cat=real_estate")}
            style={{ backgroundImage: `url(${category[3].mediaItemUrl})` }}
          >
            <div data-aos="fade-up" className="title-desc">
              <span className="sixCaps">{category[3].title}</span>
              <p className="description-photo">{category[3].description}</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/folio?cat=corporate")}
            style={{ backgroundImage: `url(${category[4].mediaItemUrl})` }}
          >
            <div data-aos="fade-up" className="title-desc">
              <span className="sixCaps">{category[4].title}</span>
              <p className="description-photo">{category[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraitCategory;
