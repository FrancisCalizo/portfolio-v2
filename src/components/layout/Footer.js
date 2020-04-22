import React from "react"
import styled from "styled-components"

import { device } from "../../utils/breakpoints"
import SocialBar from "../social/SocialBar"

const FooterContainer = styled.div`
  // position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  text-align: center;
  box-sizing: border-box;
  padding: 3rem 4rem;

  h2 {
    color: var(--text-dark);
    font-size: calc(22px + (6) * ((100vw - 330px) / (768 - 330)));
  }

  p {
    color: var(--text-gray);

    & a {
      color: var(--text-dark);
      text-decoration: none;
      padding: 5px;
      border-bottom: 2px solid var(--text-dark);
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
    </FooterContainer>
  )
}

export default Footer
