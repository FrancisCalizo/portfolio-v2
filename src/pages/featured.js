import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { device } from "../utils/breakpoints"
import config from "../../data/config"
import SEO from "../components/Seo"
import Layout from "../components/layout/Layout"
import MagazineCard from "../components/featured/MagazineCard"

const FeaturedContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  margin: 12rem 0 8rem;

  & > div {
    max-width: 600px;

    & > h1 {
      margin: 0;

      & > span:nth-child(1) {
        display: inline-block;
        color: #fff;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        letter-spacing: 1.1px;
        font-size: 26px;

        & > span {
          border-bottom: 4px solid var(--salmon);
        }
      }

      & span:nth-child(2) {
        display: block;
        color: var(--text-dark);
        line-height: 1.4;
        margin: 1.5rem 0;
        font-size: 36px;
      }
    }

    & p {
      color: var(--text-gray);
      margin: 0;
      font-size: 20px;
    }
  }
`

const Accomplishments = () => {
  const data = useStaticQuery(graphql`
    query magazineQuery {
      magazineImages: allFile(
        filter: { relativeDirectory: { eq: "magazine" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Featured" />
      <FeaturedContainer>
        <div>
          <h1>
            <span>
              // <span>Featured</span>
            </span>
            <span>{config.featured.header}</span>
          </h1>
          <p>{config.featured.description}</p>
        </div>
        <div>
          {config.featured.articles.map((article, idx) => (
            <MagazineCard
              key={idx}
              index={idx}
              articles={article}
              magazine={data.magazineImages.edges}
            />
          ))}
        </div>
      </FeaturedContainer>
    </Layout>
  )
}

export default Accomplishments
