/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { css, Flex } from "theme-ui";
import BioContent from "./bio-content";

const Bio = () => {
  const data = useStaticQuery(bioQuery);
  const {
    site: {
      siteMetadata: { author }
    },
    avatar
  } = data;

  return (
    <Flex css={css({ mb: 4 })}>
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: "20px",
            width: "48px",
            height: "48px",
            borderRadius: "9999px"
          }}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            borderRadius: 99999
          })}
          role="presentation"
        />
      )}

      <BioContent author={author} description="Author" />
    </Flex>
  );
};

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        description
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Bio;
