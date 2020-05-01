import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { lighten, darken } from "polished"
import { Transition } from "react-transition-group"

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
  opacity: ${props => (props.state === "entered" ? 1.0 : 0.0)};
  transition: opacity 0.3s ease-in;

  & div {
    max-width: 600px;

    & p:nth-child(1) {
      color: #fff;
      font-size: 26px;
      font-weight: 300;
      letter-spacing: 1.1px;

      & span:nth-child(1) {
        border-bottom: 4px solid ${config.colorsLight.bright};
        font-size: 30px;
        font-weight: 500;
      }
    }

    & h1 {
      color: ${config.colorsLight.textDark};
      font-size: 38px;
      margin: 2rem 0;
      line-height: 1.4;
    }

    & p {
      color: ${config.colorsLight.textLight};
      font-size: 21px;
      margin: 0;
    }
  }

  & div:nth-child(2) {
    margin: 3rem 0;
  }

  @media ${device.minMd} and ${device.maxLg}{
    & div {
      & p:nth-child(1){
        font-size: calc(22px + (4) * ((100vw - 768px) / (1024 - 768)));

        & span:nth-child(1){
          font-size: calc(26px + (4) * ((100vw - 768px) / (1024 - 768)));
        }
      }

      & h1 {
        font-size: calc(32px + (6) * ((100vw - 768px) / (1024 - 768)));
      }

      & p {
        font-size: calc(18px + (3) * ((100vw - 768px) / (1024 - 768)));
      }
    }
  }

  @media ${device.maxMd}{
    height: 100%;
    padding: 0 2rem;
    & div {
      max-width: none;

      & p:nth-child(1){
        font-size: calc(18px + (4) * ((100vw - 320px) / (768 - 320)));

        & span:nth-child(1){
          font-size: calc(22px + (4) * ((100vw - 320px) / (768 - 320)));
        }
      }

      & h1 {
        font-size: calc(26px + (4) * ((100vw - 320px) / (768 - 320)));
      }

      & p {
        font-size: calc(14px + (3) * ((100vw - 320px) / (768 - 320)));
      }
    }
  }

  @media ${device.maxMd}{
    text-align: center;
    margin: 5rem auto;
  }
`

const PortfolioButton = styled(Link)`
  color: ${config.colorsLight.textDark};
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  letter-spacing: 1.1px;

  &:nth-child(1) {
    margin-right: 1.5rem;
    background: ${config.colorsLight.bright};
    color: white;
    border: 1px solid ${darken(0.1, config.colorsLight.bright)};
  }

  &:nth-child(1):hover {
    background: ${lighten(0.1, config.colorsLight.bright)};
    transition: background 0.3s ease-in-out;
  }

  &:nth-child(2) {
    border: 2px solid ${config.colorsLight.bright};
  }

  &:nth-child(2):hover {
    background: ${lighten(0.1, config.colorsLight.bright)};
    color: white;
    transition: all 0.3s ease-in-out;
  }

  @media ${device.minMd} and ${device.maxLg}{
    font-size: calc(12px + (2) * ((100vw - 768px) / (1024 - 768)));
    padding: 1.5vw 2vw;
  }

  @media ${device.maxMd}{
    font-size: calc(10px + (4) * ((100vw - 320px) / (768 - 320)));
    padding: 2.25vw 3.25vw;
  }
`

const EmailButton = styled(PortfolioButton)``

const IndexPage = () => {
  const [loadTrans, setLoadTrans] = useState(false)

  useEffect(() => {
    setLoadTrans(true)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Transition in={loadTrans} timeout={0}>
        {state => (
          <HomeContainer state={state}>
            <div>
              <p>
                // Hi, I'm <span>Francis</span>{" "}
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
              <PortfolioButton to="/portfolio">View my work</PortfolioButton>
              <EmailButton
                as="a"
                href={`mailto:${config.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </EmailButton>
            </div>
          </HomeContainer>
        )}
      </Transition>
    </Layout>
  )
}

export default IndexPage
