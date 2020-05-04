import React from "react"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelopeSquare,
  faFile,
  faBlog,
} from "@fortawesome/free-solid-svg-icons"

import { SocialLinks, SocialLink } from "../styled/SocialBar"

const SocialBar = ({ email }) => {
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
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
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
