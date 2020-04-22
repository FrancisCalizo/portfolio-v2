import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { lighten, darken } from "polished"

import config from "../../data/config"
import Layout from "../components/layout/Layout"
import { device } from "../utils/breakpoints"
import SEO from "../components/Seo"

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;

  & div {
    max-width: 600px;

    & p:nth-child(1) {
      color: #fff;
      font-size: 1.9rem;
      font-weight: 300;
      letter-spacing: 1.1px;

      & span:nth-child(1) {
        border-bottom: 4px solid var(--salmon);
        font-size: 2.2rem;
        font-weight: 500;
      }
    }

    & h1 {
      color: var(--text-dark);
      font-size: 2.75rem;
      margin: 2rem 0;
      line-height: 1.4;
    }

    & p {
      color: var(--text-gray);
      font-size: 1.5rem;
      margin: 0;
    }
  }

  & div:nth-child(2) {
    margin: 3rem 0;
  }

  @media ${device.minMd} and ${device.maxLg}{
    & div {
      & p:nth-child(1){
        font-size: 2.8vw;

        & span:nth-child(1){
          font-size: 3.2vw;
        }
      }

      & h1 {
        font-size: 3.5vw;
      }

      & p {
        font-size: 2vw;
      }
    }
  }
`

const HomeLink = styled(Link)`
  color: var(--text-dark);
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  letter-spacing: 1.1px;

  &:nth-child(1) {
    margin-right: 1.5rem;
    background: var(--salmon);
    color: white;
    border: 1px solid ${darken(0.1, config.colors.salmon)};
  }

  &:nth-child(1):hover {
    background: ${lighten(0.1, config.colors.salmon)};
  }

  &:nth-child(2) {
    border: 2px solid var(--salmon);
  }

  &:nth-child(2):hover {
    background: ${lighten(0.1, config.colors.salmon)};
    color: white;
  }

    @media ${device.minMd} and ${device.maxLg}{
      font-size: 1.4vw;
      padding: 1.5vw 2vw;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer>
      <div>
        <p>
          Hi, I'm <span>Francis</span>{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </p>
        <h1>{config.description}</h1>
        <p>
          {config.bio}
          <span role="img" aria-label="flex">
            💪
          </span>
        </p>
      </div>
      <div>
        <HomeLink to="/portfolio">View my work</HomeLink>
        <HomeLink to="/contact">Get in touch</HomeLink>
      </div>
    </HomeContainer>
  </Layout>
)

export default IndexPage
