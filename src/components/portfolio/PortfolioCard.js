import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import { lighten, darken } from "polished"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

const PortfolioCardContainer = styled.div`
  display: flex;
  margin: 7rem 0;
`

const CaptionContainer = styled.div`
  flex-basis: 40%;
  max-width: 1020px;

  h2 {
    display: inline-block;
    color: var(--text-dark);
    line-height: 1.4;
    margin: 1.5rem 0 0;
    font-size: 24px;
    border-bottom: 2px solid var(--salmon);
  }
`
const Description = styled.p`
  color: var(--text-gray);
  margin: 0;
  font-size: 18px;
  padding-right: 1rem;
`

const Tech = styled.p`
  margin: 0.8rem 0 1rem;

  span {
    background: var(--text-dark);
    color: #fff;
    font-size: 12px;
    padding: 0.35rem 0.75rem;
    margin-right: 0.3rem;
    border-radius: 10px;
  }
`

const SiteButton = styled.button`
  margin-top: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.7rem 1.2rem;
  border-radius: 3px;
  font-weight: 600;
  letter-spacing: 1.1px;
  margin-right: 1.5rem;
  background: var(--salmon);
  border: 1px solid ${darken(0.1, config.colors.salmon)};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);

  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background: ${lighten(0.1, config.colors.salmon)};
    cursor: pointer;
  }
`

const SourceButton = styled(SiteButton)`
  background: transparent;

  a {
    color: var(--text-dark);
  }

  &:hover {
    background: ${lighten(0.1, config.colors.salmon)};
    color: white;
  }
`

const ImgContainer = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
`

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
        <SiteButton>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Site
          </a>
        </SiteButton>
        <SourceButton>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View Source
          </a>
        </SourceButton>
      </CaptionContainer>
      <ImgContainer>
        <Img
          fluid={portfolioImage}
          alt={portfolioImage.originalName}
          style={{ width: "100%" }}
        />
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
