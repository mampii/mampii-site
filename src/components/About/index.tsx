import React from "react";
import "./style.scss";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const twoLastPhotos = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "three-last-homepage" } } }
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

  const imagesTwoPhotos = twoLastPhotos.allWpPost.edges.map(
    ({ node }: any) => node.featuredImage?.node?.mediaItemUrl
  );

  return (
    <section className="aboutwrapper" id="about">
      <div>
        <div className="text">
          <h3 className="sixCaps" data-aos="fade-down">
            A look at the world
          </h3>
          <p data-aos="fade-up">
            Shots that tell the story of my inner journey
          </p>
        </div>
        <img src={imagesTwoPhotos[0]} alt="Last Photo" data-aos="fade-down" />
      </div>
      <div>
        <img src={imagesTwoPhotos[1]} alt="Last Photo" data-aos="fade-down" />
        <div className="text">
          <h3 data-aos="fade-down">Offer</h3>
          <p data-aos="fade-up">
            Promote your company or personal brand with our services.
          </p>
        </div>
      </div>
      <div>
        <div className="text">
          <h3 data-aos="fade-down">Passion</h3>
          <p data-aos="fade-up">
            My passion for photography goes far beyond any material
            considerations. Every moment I capture is a testament to my
            commitment to conveying emotions, telling stories and immortalizing
            the ephemeral beauty that surrounds us.
          </p>
        </div>
        <img src={imagesTwoPhotos[2]} alt="Last Photo" data-aos="fade-up" />
      </div>
    </section>
  );
};

export default About;
