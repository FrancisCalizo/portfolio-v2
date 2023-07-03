import React from "react"

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import { Link, MagazineCardContainer, Image, Fa } from "../styled/Magazinecard"

const MagazineCard = ({ articles, index, magazine }) => {
  const handleClick = () => 
    alert("Unfortunately, the URL to the e-article is no longer available :(")

  return (
    // URL to the e-magazines no longer work :(
    // <Link href={articles.url} target="_blank" rel="noopener noreferrer">
    <Link href="#" onClick={handleClick}>
      <MagazineCardContainer>
        <div>
          <Image
            fixed={magazine[index].node.childImageSharp.fixed}
            alt={magazine[index].node.childImageSharp.originalName}
          />
        </div>
        <div>
          <h2>
            {articles.title} <Fa icon={faExternalLinkAlt} size="sm" />
          </h2>
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
