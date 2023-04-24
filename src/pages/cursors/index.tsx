import Layout from '@theme/Layout'
import React, { FC } from 'react'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import CursorCard from './_components/Cursor'
import styled from '@emotion/styled'
import OpenColor from 'open-color'
import CodeBlock from '@theme/CodeBlock'
import { DefaultCursor } from '@cursorify/react'
import { EmojiCursor, PhingerCursor } from '@cursorify/cursors'

const TITLE = 'Cursorify Cursors'
const DESCRIPTION = 'Custom Cursor components using cursorify'
const SUBMIT_URL = 'https://github.com/cursorify/cursors'

const Header = () => {
  return (
    <StyledHeaderWrapper className="common-container margin-top--lg margin-bottom--xl text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={SUBMIT_URL}>
        ⚡ Add your custom cursor
      </Link>
      <CodeBlock language="tsx">{`import { CursorName } from "@cursorify/cursors";`}</CodeBlock>
    </StyledHeaderWrapper>
  )
}

const StyledHeaderWrapper = styled.div`
  width: 500px;
  padding: 0 15px;
  .code {
    border-radius: 8px;
    background-color: ${OpenColor.gray[9]};
    padding: 12px;
  }
  .button {
    margin-bottom: 40px;
  }
`

const Cursors: FC = () => {
  return (
    <Layout
      title="Cursors"
      description="Custom Cursor components using cursorify"
    >
      <StyledWrapper>
        <Header />
        <main className="common-container clean-list">
          <CursorCard cursor={<DefaultCursor />} name="DefualtCursor" />
          <CursorCard cursor={<PhingerCursor />} name="PhingerCursor" />
          <CursorCard cursor={<EmojiCursor />} name="EmojiCursor" />
        </main>
      </StyledWrapper>
    </Layout>
  )
}

export default Cursors

const StyledWrapper = styled.div`
  main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    padding: 0 15px;
  }
`
