import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import config from "../data/config"

const { language, siteTitle, author, description } = config

function Seo({ meta }) {
  return (
    <Helmet
      htmlAttributes={{
        language,
      }}
      title={siteTitle}
      titleTemplate={`${siteTitle} | Software Developer`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  meta: [],
}

Seo.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default Seo
