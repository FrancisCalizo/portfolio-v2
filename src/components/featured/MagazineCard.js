import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

const MagazineCardContainer = styled.div`
  display: flex;
  max-width: 540px;
  background: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  margin: 5rem 0 5rem 50px;

  & > div:nth-child(2) {
    margin: 0 1rem 0.7rem -2rem;

    & h2 {
      font-size: 20px;
      margin-top 30px;
    }

    & p {
      font-size: 14px;
    }
  }


  @media ${device.minMd} and ${device.maxLg} {
    & > div:nth-child(2) {

      & h2 {
        font-size: calc(16px + (4) * ((100vw - 768px) / (1024 - 768)));
        margin-top 30px;
        margin-top 20px;
      }

      & p {
        font-size: calc(12px + (2) * ((100vw - 768px) / (1024 - 768)));
      }
  }


`
const Image = styled(Img)`
  transform: translate(-50px, -50px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4), 0 4px 8px 0 rgba(0, 0, 0, 0.22);
`

const MagazineCard = ({ articles, index, magazine }) => {
  return (
    <MagazineCardContainer>
      <div>
        <Image
          fixed={magazine[index].node.childImageSharp.fixed}
          alt={magazine[index].node.childImageSharp.originalName}
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
