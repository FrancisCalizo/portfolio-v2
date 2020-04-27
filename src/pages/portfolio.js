import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { device } from "../utils/breakpoints"
import config from "../../data/config"
import SEO from "../components/Seo"
import Layout from "../components/layout/Layout"

// import fsu from "../images/portfolio/fsu.png"

const PortfolioContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;

  & div {
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

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query portfolioImageQuery {
      portfolioImages: allFile(
        filter: { relativeDirectory: { eq: "portfolio" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 700, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.portfolioImages)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <PortfolioContainer>
        <div>
          <h1>
            <span>
              // <span>Portfolio</span>
            </span>
            <span>{config.portfolio.header}</span>
          </h1>
          <p>{config.portfolio.description}</p>
        </div>
        <Img
          fluid={data.portfolioImages.edges[0].node.childImageSharp.fluid}
          alt={data.portfolioImages.edges[0].node.childImageSharp.originalName}
        />
        {/* <img src={fsu} alt="yeet" style={{ width: "500px" }} /> */}
      </PortfolioContainer>
    </Layout>
  )
}

export default Portfolio
