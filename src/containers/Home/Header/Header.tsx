import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React, { FC } from 'react'
import { StyledWrapper } from './Header.style'

export const Header: FC = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <StyledWrapper>
      <div className="container">
        <h1 className="hero__title">
          🕹️ <br />
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={'buttons'}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start"
            style={{ width: '180px', cursor: 'pointer' }}
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/cursors"
            style={{ width: '180px', cursor: 'pointer' }}
          >
            Cursors
          </Link>
        </div>
      </div>
    </StyledWrapper>
  )
}
