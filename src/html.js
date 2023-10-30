import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style>{`

        body.hidebody{
          overflow-y: hidden;
        }
       .overlay-loading {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        z-index: 999999999;
        pointer-events: none;
        top: 0;
        left: 0;
      }
  
      .overlay-loading div {
        width: 20%;
        background-color: #2a2a2a;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      .overlay-loading div:nth-child(1) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
        transition-delay: 630ms!important;
      }
  
      .overlay-loading div:nth-child(2) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
        transition-delay: 560ms!important;
      }
  
      .overlay-loading div:nth-child(3) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
        transition-delay: 490ms!important;
      }
  
      .overlay-loading div:nth-child(4) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
        transition-delay: 420ms!important;
      }
  
      .overlay-loading div:nth-child(5) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
        transition-delay: 350ms!important;
      }
  
      .overlay-loading div:nth-child(6) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
        transition-delay: 280ms!important;
      }
  
      .overlay-loading div:nth-child(7) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1);
        transition-delay: 210ms!important;
      }
  
      .overlay-loading.loaded div {
        transform: translateY(-100%);
      }
      `}</style>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="hidebody">
        {props.preBodyComponents}
        <div className="overlay-loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
