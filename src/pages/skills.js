import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCard from "../components/skillCard"
import { skills } from "../util/skillsItems"
import "../styles/App.scss"

const Skills = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <Container className="skills-page">
        <Row>
          {skills.map(({ url, caption }) => (
            <Col md={3} key={url}>
              <SkillCard url={url} caption={caption} />
            </Col>
          ))}
        </Row>
      </Container>
      <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
        a
      </Link>
    </Layout>
  )
}

export default Skills