import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Transition } from "react-transition-group"

import config from "../../data/config"
import SEO from "../components/SEO"
import Layout from "../components/layout/Layout"
import PortfolioCard from "../components/portfolio/PortfolioCard"
import { PortfolioContainer, Line } from "../components/styled/Portfolio"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query portfolioImageQuery {
      portfolioImages: allFile(
        filter: { relativeDirectory: { eq: "portfolio" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 700, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
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
      <SEO title="Portfolio" />
      <Transition in={loadTrans} timeout={0}>
        {state => (
          <PortfolioContainer state={state}>
            <div>
              <h1>
                <span>
                  // <span>Portfolio</span>
                </span>
                <span>{config.portfolio.header}</span>
              </h1>
              <p>{config.portfolio.description}</p>
              <Line />
            </div>
            <div>
              {config.portfolio.projects.map((project, idx) => {
                const [image] = data.portfolioImages.edges.filter(img => {
                  return (
                    img.node.childImageSharp.fluid.originalName === project.img
                  )
                })
                const portfolioImage = image.node.childImageSharp.fluid
                return (
                  <PortfolioCard
                    key={idx}
                    project={project}
                    portfolioImage={portfolioImage}
                  />
                )
              })}
            </div>
          </PortfolioContainer>
        )}
      </Transition>
    </Layout>
  )
}

export default Portfolio
