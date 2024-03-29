import styled from "styled-components"

import { device } from "../../utils/breakpoints"
import fluid from "../../utils/fluid"

export const FooterContainer = styled.div`
  bottom: 0;
  width: 100%;
  background: ${props => props.theme.bgAlt};
  text-align: center;
  box-sizing: border-box;
  padding: 3rem 4rem;
  transition: all 300ms ease-in-out;

  h2 {
    color: ${props => props.theme.textDark};
    font-size: ${fluid(22, 6, 330, 768)};
    transition: all 300ms ease-in-out;
  }

  p {
    color: ${props => props.theme.textLight};
    transition: all 300ms ease-in-out;
    font-size: ${fluid(14, 2, 330, 768)};

    & a {
      color: ${props => props.theme.textDark};
      text-decoration: none;
      padding: 5px;
      border-bottom: 2px solid ${props => props.theme.textDark};
      transition: all 300ms ease-in-out;

      &:hover {
        color: ${props => props.theme.hoverTextDark};
        border-bottom: 2px solid ${props => props.theme.hoverTextDark};
        transition: all 300ms ease-in-out;
      }
    }
  }

  p:nth-child(3) {
    margin: 1rem 0 2.5rem;
  }

  @media (${device.minMd}) {
    display: none;
  }
`

export const SocialContainer = styled.div`
  & div {
    margin: 0 auto;
  }
`

export const Created = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textLight};
  margin: 2rem 0 0;
  transition: all 300ms ease-in-out;

  span {
    color: ${props => props.theme.textDark};
    font-weight: 500;
    transition: all 300ms ease-in-out;
  }

  & a:nth-child(2) {
    border: none;
  }

  a:hover {
    color: ${props => props.theme.bright};
    transition: all 300ms ease-in-out;
  }
`
