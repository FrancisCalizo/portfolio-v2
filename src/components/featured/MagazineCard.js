import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

const Link = styled.a`
  text-decoration: none;
  text-align: left;
`

const MagazineCardContainer = styled.div`
  display: flex;
  max-width: 540px;
  background: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  margin: 5rem 0 5rem 50px;

  &:hover {
    opacity: 0.7;
  }

  & > div:nth-child(2) {
    margin: 0 1rem 0.7rem -2rem;

    & h2 {
      color: var(--text-dark);
      font-size: 20px;
      margin-top 30px;
      margin-bottom: 10px;
      padding-bottom: 3px;
      border-bottom: 2px solid var(--salmon);
    }

    & p {
      font-size: 16px;
    }
  }

  @media ${device.minMd} and ${device.maxLg} {
    & > div:nth-child(2) {

      & h2 {
        font-size: calc(16px + (4) * ((100vw - 768px) / (1024 - 768)));
        margin-top calc(10px + (10) * ((100vw - 768px) / (1024 - 768)));
      }

      & p {
        font-size: calc(12px + (4) * ((100vw - 768px) / (1024 - 768)));
      }
    }
  }


  @media ${device.minSm} and ${device.maxMd}{
    & > div:nth-child(2) {

      & h2 {
        font-size: calc(16px + (4) * ((100vw - 425px) / (768 - 425)));
        margin-top calc(10px + (10) * ((100vw - 425px) / (768 - 425)));
      }

      & p {
        font-size: calc(12px + (4) * ((100vw - 425px) / (768 - 425)));
      }
    }
  }

  @media ${device.maxSm}{
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin: 5rem 0.5rem 2rem;

    & > div:nth-child(2) {
      margin: -4rem 0.5rem 1.5rem;

      & h2 {
        font-size: calc(16px + (4) * ((100vw - 320px) / (425 - 320)));
      }

      & p {
        font-size: calc(12px + (4) * ((100vw - 320px) / (425 - 320)));
      }
    }
  }
`
const Image = styled(Img)`
  transform: translate(-50px, -50px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4), 0 4px 8px 0 rgba(0, 0, 0, 0.22);

  @media ${device.maxSm} {
    transform: translateY(-50px);
  }
`

const MagazineCard = ({ articles, index, magazine }) => {
  return (
    <Link href={articles.url} target="_blank" rel="noopener noreferrer">
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
    </Link>
  )
}

MagazineCard.propTypes = {
  articles: PropTypes.object.isRequired,
}

export default MagazineCard
