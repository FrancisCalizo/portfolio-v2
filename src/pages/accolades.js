import React from "react"
import styled from "styled-components"

import { device } from "../utils/breakpoints"
import config from "../../data/config"
import SEO from "../components/Seo"
import Layout from "../components/layout/Layout"

const AccoladesContainer = styled.div`
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

const Accomplishments = () => {
  return (
    <Layout>
      <SEO title="Accolades" />
      <AccoladesContainer>
        <div>
          <h1>
            <span>
              // <span>Accolades</span>
            </span>
            <span>{config.accolades.header}</span>
          </h1>
          <p>{config.accolades.description}</p>
        </div>
      </AccoladesContainer>
    </Layout>
  )
}

export default Accomplishments
