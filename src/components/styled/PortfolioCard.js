import styled from "styled-components"

import { device } from "../../utils/breakpoints"
import fluid from "../../utils/fluid"

export const PortfolioCardContainer = styled.div`
  display: flex;
  margin: 4rem 0;

  @media ${device.minMd} and (${device.maxLg}) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }

  @media ${device.maxMd} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`

export const CaptionContainer = styled.div`
  flex-basis: 40%;
  max-width: 1020px;

  a {
    text-decoration: none;
  }

  h2 {
    display: inline-block;
    color: ${props => props.theme.textDark};
    line-height: 1.4;
    margin: 1.5rem 0 0;
    font-size: 26px;
    border-bottom: 2px solid ${props => props.theme.bright};
    transition: all 300ms ease-in-out;
  }

  @media ${device.minLg} and (${device.maxXl}) {
    h2 {
      font-size: ${fluid(22, 4, 1024, 1498)};
    }
  }

  @media ${device.minMd} and (${device.maxLg}) {
    flex-basis: 100%;

    h2 {
      font-size: ${fluid(22, 4, 768, 1024)};
    }
  }

  @media ${device.maxMd} {
    h2 {
      font-size: ${fluid(22, 2, 330, 768)};
    }
  }
`
export const Description = styled.p`
  color: ${props => props.theme.textLight};
  margin: 0;
  font-size: 18px;
  padding-right: 1rem;
  transition: all 300ms ease-in-out;

  @media ${device.minLg} and (${device.maxXl}) {
    font-size: ${fluid(16, 2, 1024, 1498)};
  }

  @media ${device.minMd} and (${device.maxLg}) {
    font-size: ${fluid(16, 4, 768, 1024)};
  }

  @media ${device.maxMd} {
    font-size: ${fluid(14, 4, 330, 768)};
    padding: 0;
  }
`

export const Tech = styled.p`
  margin: 0.4rem 0 1rem;

  span {
    display: inline-block;
    background: ${props => props.theme.textDark};
    color: ${props => props.theme.bgAlt};
    font-size: 12px;
    padding: 0.35rem 0.75rem;
    margin: 0.4rem 0.3rem 0.2rem 0;
    border-radius: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
    border: 1px solid ${props => props.theme.textLight};
    transition: all 300ms ease-in-out;

    @media ${device.minLg} and (${device.maxXl}) {
      font-size: ${fluid(11, 1, 1024, 1498)};
    }

    @media ${device.maxMd} {
      font-size: ${fluid(10, 2, 330, 768)};
    }
  }
`

export const SiteButton = styled.button`
  margin-top: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.7rem 1.2rem;
  border-radius: 3px;
  font-weight: 600;
  letter-spacing: 1.1px;
  margin-right: 1.5rem;
  background: ${props => props.theme.bright};
  border: 1px solid ${props => props.theme.bright};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  transition: all 300ms ease-in-out;
  color: ${props => props.theme.bgAlt};
  transition: all 300ms ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.hoverBright};
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }

  @media ${device.minLg} and (${device.maxXl}) {
    font-size: ${fluid(10, 3, 1024, 1498)};
    padding: ${fluid(7, 3, 1024, 1498)} ${fluid(18, 8, 1024, 1498)};
    margin-right: ${fluid(12, 9, 1024, 1498)};
  }

  @media ${device.maxMd} {
    display: block;
    margin: 1rem auto;
    font-size: ${fluid(11, 2, 330, 768)};
  }
`

export const SourceButton = styled(SiteButton)`
  background: transparent;
  color: ${props => props.theme.textDark};
  transition: all 300ms ease-in-out;

  &:hover {
    background: ${props => props.theme.hoverBright};
    color: ${props => props.theme.bgAlt};
    transition: all 0.3s ease-in-out;
  }
`

export const ImgContainer = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;

  &:hover {
    opacity: 0.8;
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
  }

  @media ${device.minMd} and (${device.maxLg}) {
    flex-basis: 100%;
    width: 100%;
    padding-left: 0;
  }

  @media ${device.maxMd} {
    flex-basis: 100%;
    width: 100%;
    padding: 0;
  }
`
