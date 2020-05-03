import React from "react"
import styled from "styled-components"
import { lighten, cssVar } from "polished"

import { device } from "../../utils/breakpoints"
import SocialBar from "../social/SocialBar"

const FooterContainer = styled.div`
  bottom: 0;
  width: 100%;
  background: ${props => props.theme.bgAlt};
  text-align: center;
  box-sizing: border-box;
  padding: 3rem 4rem;

  h2 {
    color: ${props => props.theme.textDark};
    font-size: calc(22px + (6) * ((100vw - 330px) / (768 - 330)));
  }

  p {
    color: ${props => props.theme.textLight};

    & a {
      color: ${props => props.theme.textDark};
      text-decoration: none;
      padding: 5px;
      border-bottom: 2px solid ${props => props.theme.textDark};

      &:hover {
        color: ${props => props.theme.hoverTextDark};
        border-bottom: 2px solid ${props => props.theme.hoverTextDark};
      }
    }
  }

  p:nth-child(3) {
    margin: 1rem 0 2.5rem;
  }

  @media ${device.minMd} {
    display: none;
  }
`

const SocialContainer = styled.div`
  & div {
    margin: 0 auto;
  }
`

const Created = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textLight};
  margin: 2rem 0 0;

  span {
    color: ${props => props.theme.textDark};
    font-weight: 500;
  }

  & a:nth-child(2) {
    border: none;
  }

  a:hover {
    color: ${props => props.theme.bright};
  }
`

const Footer = ({ email }) => {
  return (
    <FooterContainer>
      <h2>Let's Connect!</h2>
      <p>
        For business inquiries, comments, questions, concerns, and everything
        else in between, please feel free to give me a shout!
      </p>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <SocialContainer>
        <SocialBar email={email} />
      </SocialContainer>
      <Created>
        Built by <span>Francis Calizo</span> with
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby.js
        </a>
      </Created>
    </FooterContainer>
  )
}

export default Footer
