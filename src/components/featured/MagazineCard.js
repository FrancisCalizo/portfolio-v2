import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

const MagazineCardContainer = styled.div`
  max-width: 540px;
  background: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  margin: 5rem 0 5rem 50px;
`
const Image = styled(Img)`
  transform: translate(-50px, -50px);
`

const MagazineCard = ({ articles, index, magazine }) => {
  console.log(magazine)
  return (
    <MagazineCardContainer>
      <div>
        <Image
          fluid={magazine[index].node.childImageSharp.fluid}
          alt={magazine[index].node.childImageSharp.originalName}
          style={{ maxWidth: "200px" }}
        />
      </div>
      <div>
        <h2>{articles.title}</h2>
        <p>{articles.description}</p>
      </div>
    </MagazineCardContainer>
  )
}

MagazineCard.propTypes = {
  articles: PropTypes.object.isRequired,
}

export default MagazineCard
