import React, { FC } from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { Helmet } from "react-helmet";
import imageMeta from "../../images/mampii.webp";
import iconTag from "../../images/icon-light.png";

type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: any;
};

export const SEO: FC<SeoProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <link rel="icon" href={iconTag} />
      <meta name="description" content={seo.description} />
      <meta name="title" content={seo.title} />
      <meta
        name="keywords"
        content="Mampii,Mampy,Mampi,Mampionona Rakotojaona,Mampionona,Rakotojaona"
      />

      <meta property="og:URL" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta
        property="og:keywords"
        content="Mampii,Mampy,Mampi,Mampionona Rakotojaona,Mampionona,Rakotojaona"
      />

      <meta property="og:image" content={imageMeta} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={imageMeta} />

      {children}
    </Helmet>
  );
};
