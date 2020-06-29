import { Link } from "gatsby"
import styled from "styled-components"

import fluid from "../../utils/fluid"
import { device } from "../../utils/breakpoints"

export const HomeContainer = styled.div`
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

  @media (${device.minMd}) and (${device.maxLg}) {
    & div {
      & p:nth-child(1) {
        font-size: ${fluid(22, 4, 768, 1024)};

        & span:nth-child(1) {
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

  @media (${device.maxMd}) {
    height: 100%;
    padding: 0 2rem;
    & div {
      max-width: none;

      & p:nth-child(1) {
        font-size: ${fluid(18, 4, 320, 768)};

        & span:nth-child(1) {
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

  @media (${device.maxMd}) {
    text-align: center;
    margin: 5rem auto;
  }
`
export const PortfolioButton = styled(Link)`
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

    @media (${device.maxXs}) {
      margin-right: 0.5rem;
    }
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

  @media (${device.minMd}) and (${device.maxLg}) {
    font-size: ${fluid(12, 2, 768, 1024)};
    padding: 1.5vw 2vw;
  }

  @media (${device.maxMd}) {
    font-size: ${fluid(10, 4, 320, 768)};
    padding: ${fluid(12, 4, 320, 768)} ${fluid(16, 4, 320, 768)};
  }

  @media (${device.maxXs}) {
    display: block;
    margin: 1rem 0.5rem;
  }
`

export const EmailButton = styled(PortfolioButton)``
