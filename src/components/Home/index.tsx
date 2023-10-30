import React from "react";
import "./style.scss";
import { graphql, useStaticQuery } from "gatsby";

const Home = () => {
  const bestofthree = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "best-of-three" } } }
          }
        }
        sort: {date: ASC}
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

  const imagesBoThree = bestofthree.allWpPost.edges
    .map(({ node }: any) => node.featuredImage?.node?.mediaItemUrl)
    .filter(Boolean);

  const styles = {
    backgroundImage: `url(${imagesBoThree[0]})`,
    animation: "changeImage 12s",
  };

  const keyframes = `
    @keyframes changeImage {
      0% {
        background-image: url(${imagesBoThree[0]});
      }

      33.33% {
        background-image: url(${imagesBoThree[1]});
      }

      66.66% {
        background-image: url(${imagesBoThree[2]});
      }

      100% {
        background-image: url(${imagesBoThree[0]});
      }
    }
  `;
  return (
    <section id="home">
      <div className="wrapper_home" style={styles}>
        <div className="overlay"></div>
        <div className="home_container">
          <h1 data-aos="fade-down">Mampii</h1>
          <span data-aos="fade-up" className="sixCaps home-desc">
          "Immerse yourself in a visual journey where reality meets the imaginary."
          </span>
          <div className="scroll-down">
            Scroll Down
            <div className="mouse_scroll">
              <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
              </div>
            </div>
          </div>
        </div>
        <style>{keyframes}</style>
      </div>
    </section>
  );
};

export default Home;
