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

  @media ${device.minMd} and ${device.maxLg} {
    & div {
      & h1 {
        & span:nth-child(1) {
          font-size: calc(18px + (6) * ((100vw - 768px) / (1024 - 768)));
        }
        & span:nth-child(2) {
          font-size: calc(28px + (6) * ((100vw - 768px) / (1024 - 768)));
        }
      }

      & p {
        font-size: calc(16px + (4) * ((100vw - 768px) / (1024 - 768)));
      }
    }
  }

  @media ${device.maxMd}{
    min-height: 0;
    text-align: center;
    margin: 5rem auto;
    padding: 0 2rem;

    & div {
      & h1 {
        & span:nth-child(1) {
          font-size: calc(18px + (6) * ((100vw - 330px) / (768 - 330)));
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
  text-align: left;
  border: 1px solid white;
  margin: 2.5rem 0;
  margin-left: 0;
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
              fixed(width: 180, quality: 100) {
                originalName
                ...GatsbyImageSharpFixed
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
          <Line />
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
