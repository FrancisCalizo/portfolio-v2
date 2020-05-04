import styled from "styled-components"

import { device } from "../../utils/breakpoints"
import fluid from "../../utils/fluid"

export const FeaturedContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  margin: 10rem 0 8rem;
  opacity: ${props => (props.state === "entered" ? 1.0 : 0.0)};
  transition: opacity 0.3s ease-in;

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
          border-bottom: 4px solid ${props => props.theme.bright};
          transition: all 300ms ease-in-out;
        }
      }

      & span:nth-child(2) {
        display: block;
        color: ${props => props.theme.textDark};
        transition: all 300ms ease-in-out;
        line-height: 1.4;
        margin: 1.5rem 0;
        font-size: 36px;
      }
    }

    & p {
      color: ${props => props.theme.textLight};
      margin: 0;
      font-size: 20px;
      transition: all 300ms ease-in-out;
    }
  }

  @media ${device.minMd} and ${device.maxLg} {
    & div {
      & h1 {
        & span:nth-child(1) {
          font-size: ${fluid(22, 4, 768, 1024)};
        }
        & span:nth-child(2) {
          font-size: ${fluid(32, 4, 768, 1024)};
        }
      }

      & p {
        font-size: ${fluid(18, 3, 768, 1024)};
      }
    }
  }

  @media ${device.maxMd}{
    min-height: 0;
    text-align: center;
    margin: 5rem auto;
    padding: 0 2rem;

    & div {
      max-width: none;

      & h1 {
        & span:nth-child(1) {
          font-size: ${fluid(24, 2, 330, 768)};
        }
        & span:nth-child(2) {
          font-size: ${fluid(28, 6, 330, 768)};
        }
      }

      & p {
        font-size: ${fluid(14, 6, 330, 768)};
      }
    }
  }
`
export const Line = styled.hr`
  width: 40px;
  border: 1px solid white;
  margin: 2.5rem 0;
  margin-left: 0;

  @media ${device.maxMd} {
    margin: 2.5rem auto;
  }
`
