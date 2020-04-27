import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

const PortfolioCardContainer = styled.div``

const PortfolioCard = ({ project, portfolioImages }) => {
  console.log(portfolioImages[0].node.childImageSharp.fluid.originalname)
  return (
    <PortfolioCardContainer>
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div>
        {/* <Img
          fluid={data.portfolioImages.edges[0].node.childImageSharp.fluid}
          alt={data.portfolioImages.edges[0].node.childImageSharp.originalName}
        /> */}
      </div>
    </PortfolioCardContainer>
  )
}

PortfolioCard.propTypes = {
  project: PropTypes.object.isRequired,
  portfolioImages: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.object,
    })
  ).isRequired,
}

export default PortfolioCard
