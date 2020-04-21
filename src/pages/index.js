import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import config from "../../data/config"
import Layout from "../components/layout/Layout"
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

      & span {
        border-bottom: 4px solid var(--salmon);
        font-size: 2.2rem;
        font-weight: 500;
      }
    }

    & h1 {
      color: var(--text-dark);
      font-size: 2.6rem;
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
  }

  &:nth-child(2) {
    border: 2px solid var(--salmon);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer>
      <div>
        <p>
          Hi, I'm <span>Francis</span> 👋
        </p>
        <h1>{config.description}</h1>
        <p>{config.bio} 💪</p>
      </div>
      <div>
        <HomeLink to="/portfolio">View my work</HomeLink>
        <HomeLink to="/contact">Get in touch</HomeLink>
      </div>
    </HomeContainer>
  </Layout>
)

export default IndexPage
