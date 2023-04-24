import Layout from '@theme/Layout'
import React, { FC } from 'react'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'

const TITLE = 'Cursorify Showcase'
const DESCRIPTION = 'List of websites using Cursorify'
const SUBMIT_URL = 'https://github.com/cursorify/cursorify.github.io'

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={SUBMIT_URL}>
        <div id="showcase.header.button">🙏 Please add your site</div>
      </Link>
    </section>
  )
}

const Showcase: FC = () => {
  return (
    <Layout title="Showcase" description="List of websites using Cursorify">
      <ShowcaseHeader />
      Showcase
    </Layout>
  )
}

export default Showcase
