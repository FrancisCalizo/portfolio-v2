import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Transition } from "react-transition-group"

import config from "../../data/config"
import SEO from "../components/Seo"
import Layout from "../components/layout/Layout"
import MagazineCard from "../components/featured/MagazineCard"
import { FeaturedContainer, Line } from "../components/styled/Featured"

const Accomplishments = () => {
  const data = useStaticQuery(graphql`
    query magazineQuery {
      magazineImages: allFile(
        filter: { relativeDirectory: { eq: "magazine" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 180, quality: 100) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const [loadTrans, setLoadTrans] = useState(false)

  useEffect(() => {
    setLoadTrans(true)
  }, [])

  return (
    <Layout>
      <SEO title="Featured" />
      <Transition in={loadTrans} timeout={0}>
        {state => (
          <FeaturedContainer state={state}>
            <div>
              <h1>
                <span>
                  // <span>Featured</span>
                </span>
                <span>{config.featured.header}</span>
              </h1>
              <p>{config.featured.description}</p>
              <Line />
            </div>
            <div>
              {config.featured.articles.map((article, idx) => (
                <MagazineCard
                  key={idx}
                  index={idx}
                  articles={article}
                  magazine={data.magazineImages.edges}
                />
              ))}
            </div>
          </FeaturedContainer>
        )}
      </Transition>
    </Layout>
  )
}

export default Accomplishments
