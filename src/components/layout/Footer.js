import React from "react"

import SocialBar from "../social/SocialBar"
import { FooterContainer, SocialContainer, Created } from "../styled/Footer"

const Footer = ({ email, resume }) => {
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
        <SocialBar email={email} resume={resume} />
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
