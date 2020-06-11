import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import {
  PortfolioCardContainer,
  CaptionContainer,
  Description,
  Tech,
  SiteButton,
  SourceButton,
  ImgContainer,
} from "../styled/PortfolioCard"

const PortfolioCard = ({ project, portfolioImage }) => {
  return (
    <PortfolioCardContainer>
      <CaptionContainer>
        <h2>{project.title}</h2>
        <Tech>
          {project.tech.map((e, idx) => (
            <span key={idx}>{e}</span>
          ))}
        </Tech>
        <Description>{project.description}</Description>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <SiteButton>View Site</SiteButton>
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <SourceButton>View Source</SourceButton>
        </a>
      </CaptionContainer>
      <ImgContainer>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Img
            fluid={portfolioImage}
            alt={portfolioImage.originalName}
            style={{ width: "100%" }}
          />
        </a>
      </ImgContainer>
    </PortfolioCardContainer>
  )
}

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    github: PropTypes.string,
    img: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  portfolioImage: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    originalName: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }).isRequired,
}

export default PortfolioCard
