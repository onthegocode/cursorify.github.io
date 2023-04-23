import Layout from '@theme/Layout'
import React, { FC } from 'react'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'

const TITLE = 'Cursorify Cursors'
const DESCRIPTION = 'Custom Cursor components using cursorify'
const SUBMIT_URL = 'https://github.com/cursorify/cursors'

function Header() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={SUBMIT_URL}>
        Add your custom cursor
      </Link>
    </section>
  )
}

const Cursors: FC = () => {
  return (
    <Layout
      title="Cursors"
      description="Custom Cursor components using cursorify"
    >
      <Header />
      <main className="common-container">cursors</main>
    </Layout>
  )
}

export default Cursors
