import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { device } from "../utils/breakpoints"
import config from "../../data/config"
import SEO from "../components/Seo"
import Layout from "../components/layout/Layout"
import PortfolioCard from "../components/portfolio/PortfolioCard"

const PortfolioContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  margin: 12rem 0 8rem;

  & > div:nth-child(1) {
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

  @media ${device.minMd} and ${device.maxLg} {
    & > div:nth-child(1) {
      & h1 {
        & span:nth-child(1) {
          font-size: calc(22px + (4) * ((100vw - 768px) / (1024 - 768)));
        }
        & span:nth-child(2) {
          font-size: calc(32px + (4) * ((100vw - 768px) / (1024 - 768)));
        }
      }

      & p {
        font-size: calc(18px + (3) * ((100vw - 768px) / (1024 - 768)));
      }
    }
  }

  @media ${device.maxMd}{
    min-height: 0;
    text-align: center;
    margin: 5rem auto;
    padding: 0 2rem;

    & > div:nth-child(1) {
      max-width: none;

      & h1 {
        & span:nth-child(1) {
          font-size: calc(24px + (2) * ((100vw - 330px) / (768 - 330)));
        }
        & span:nth-child(2) {
          font-size: calc(28px + (6) * ((100vw - 330px) / (768 - 330)));
        }
      }

      & p {
        font-size: calc(14px + (6) * ((100vw - 330px) / (768 - 330)));
      }
    }
  }
`

const Line = styled.hr`
  width: 40px;
  border: 1px solid white;
  margin: 5rem 0 0;
  margin-left: 0;

  @media ${device.maxMd} {
    margin: 5rem auto 0;
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
          <Line />
        </div>
        <div>
          {config.portfolio.projects.map((project, idx) => {
            const [image] = data.portfolioImages.edges.filter(img => {
              return img.node.childImageSharp.fluid.originalName === project.img
            })
            const portfolioImage = image.node.childImageSharp.fluid
            return (
              <PortfolioCard
                key={idx}
                project={project}
                portfolioImage={portfolioImage}
              />
            )
          })}
        </div>
      </PortfolioContainer>
    </Layout>
  )
}

export default Portfolio
