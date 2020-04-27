import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

const PortfolioCardContainer = styled.div``

const PortfolioCard = ({ project, portfolioImage }) => {
  console.log(portfolioImage)
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
  project: PropTypes.object.isRequired,
  portfolioImage: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.object,
    })
  ).isRequired,
}

export default PortfolioCard
