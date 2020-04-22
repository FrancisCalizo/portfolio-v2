import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelopeSquare,
  faFile,
  faBlog,
} from "@fortawesome/free-solid-svg-icons"

import { device } from "../../utils/breakpoints"

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`

const SocialLink = styled(FontAwesomeIcon)`
  color: var(--text-dark);

  &:hover {
    color: var(--salmon);
  }
`

const SocialBar = () => {
  return (
    <SocialLinks>
      <a
        href="https://linkedin.com/in/fcalizo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialLink icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/franciscalizo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialLink icon={faGithub} size="2x" />
      </a>
      <a
        href="mailto:francisacalizo@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialLink icon={faEnvelopeSquare} size="2x" />
      </a>
      <a href="#!" target="_blank" rel="noopener noreferrer">
        <SocialLink icon={faFile} size="2x" />
      </a>
      <a
        href="https://ohyoufrancybruh.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialLink icon={faBlog} size="2x" />
      </a>
    </SocialLinks>
  )
}

export default SocialBar
