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
  padding: 0 4rem;

  & div {
    max-width: 570px;

    & h1:nth-child(1) {
      color: #fff;
      font-size: 1.7rem;

      & span {
        color: var(--salmon);
      }
    }

    & h1:nth-child(2) {
      color: var(--text-dark);
      font-size: 2.7rem;
    }

    & p {
      color: var(--text-gray);
      font-size: 1.5rem;
    }
  }
`

const HomeLink = styled(Link)`
  color: var(--text-dark);
  text-transform: uppercase;

  &:nth-child(1) {
    margin-right: 1.5rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer>
      <div>
        <h1>
          Hi, I'm <span>Francis</span> 👋
        </h1>
        <h1>{config.description}</h1>
        <p>{config.bio} 💪</p>
      </div>
      <div>
        <HomeLink to="/portfolio">See my work</HomeLink>
        <HomeLink to="/contact">Get in touch</HomeLink>
      </div>
    </HomeContainer>
  </Layout>
)

export default IndexPage
