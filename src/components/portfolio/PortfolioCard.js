import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

const PortfolioCardContainer = styled.div``

const PortfolioCard = ({ project, portfolioImage }) => {
  return (
    <PortfolioCardContainer>
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div>
        <Img fluid={portfolioImage} alt={portfolioImage.originalName} />
      </div>
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
