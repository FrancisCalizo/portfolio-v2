import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Transition } from "react-transition-group"

import config from "../../data/config"
import fluid from "../utils/fluid"
import Layout from "../components/layout/Layout"
import { device } from "../utils/breakpoints"
import SEO from "../components/Seo"

const HomeContainer = styled.div`
  // height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  margin: 10rem 0 8rem;
  opacity: ${props => (props.state === "entered" ? 1.0 : 0.0)};
  transition: opacity 0.3s ease-in;

  & div {
    max-width: 600px;

    & p:nth-child(1) {
      color: #fff;
      font-size: 26px;
      font-weight: 300;
      letter-spacing: 1.1px;
      padding-top: 8px;

      & span:nth-child(1) {
        border-bottom: 4px solid ${props => props.theme.bright};
        transition: all 300ms ease-in-out;
        font-size: 30px;
        font-weight: 500;
      }
    }

    & h1 {
      color: ${props => props.theme.textDark};
      font-size: 38px;
      margin: 1.5rem 0;
      line-height: 1.4;
      transition: all 300ms ease-in-out;
    }

    & p {
      color: ${props => props.theme.textLight};
      font-size: 21px;
      margin: 0;
      transition: all 300ms ease-in-out;
    }
  }

  & div:nth-child(2) {
    margin: 3rem 0;
  }

  @media ${device.minMd} and ${device.maxLg}{
    & div {
      & p:nth-child(1){
        font-size: ${fluid(22, 4, 768, 1024)};

        & span:nth-child(1){
          font-size: ${fluid(26, 4, 768, 1024)};
        }
      }

      & h1 {
        font-size: ${fluid(32, 6, 768, 1024)};
      }

      & p {
        font-size: ${fluid(18, 3, 768, 1024)};
      }
    }
  }

  @media ${device.maxMd}{
    height: 100%;
    padding: 0 2rem;
    & div {
      max-width: none;

      & p:nth-child(1){
        font-size: ${fluid(18, 4, 320, 768)};

        & span:nth-child(1){
        font-size: ${fluid(22, 4, 320, 768)};
        }
      }

      & h1 {
        font-size: ${fluid(26, 4, 320, 768)};
      }

      & p {
        font-size: ${fluid(14, 3, 320, 768)};
      }
    }
  }

  @media ${device.maxMd}{
    text-align: center;
    margin: 5rem auto;
  }
`

const PortfolioButton = styled(Link)`
  color: ${props => props.theme.textDark};
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  letter-spacing: 1.1px;
  transition: all 300ms ease-in-out;

  &:nth-child(1) {
    margin-right: 1.5rem;
    background: ${props => props.theme.bright};
    color: ${props => props.theme.bgAlt};
    transition: all 300ms ease-in-out;
  }

  &:nth-child(1):hover {
    background: ${props => props.theme.hoverBright};
    transition: background 0.3s ease-in-out;
  }

  &:nth-child(2) {
    border: 2px solid ${props => props.theme.bright};
    transition: all 300ms ease-in-out;
  }

  &:nth-child(2):hover {
    background: ${props => props.theme.hoverBright};
    color: ${props => props.theme.bgAlt};
    transition: all 0.3s ease-in-out;
  }

  @media ${device.minMd} and ${device.maxLg}{
    font-size: ${fluid(12, 2, 768, 1024)};
    padding: 1.5vw 2vw;
  }

  @media ${device.maxMd}{
    font-size: ${fluid(10, 4, 320, 768)};
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
