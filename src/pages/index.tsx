import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import StyledWrapper from './index.style'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', 'header')}>
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
            style={{ width: '180px' }}
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start"
            style={{ width: '180px' }}
          >
            Cursor
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Home`}
      description="Customizable cursor component in your project."
    >
      <StyledWrapper>
        <HomepageHeader />
        <main>
          <div className="window">
            <div className="header">
              <div className="lt">
                <div
                  className="btn"
                  data-type="close"
                  // {...register('pointer')}
                ></div>
                <div
                  className="btn"
                  data-type="minimize"
                  // {...register('pointer')}
                ></div>
                <div
                  className="btn"
                  data-type="maximize"
                  // {...register('pointer')}
                ></div>
              </div>
              {/* <div className="rt">🕹️</div> */}
            </div>
            <div className="content">
              <div className="title">
                <h2>Easily customize your mouse cursor! 🎉</h2>
                <div className="description">
                  React Cursorify is a library that helps you easily custom the
                  style of the mouse cursor in a React project. <br /> Choose
                  your cursor below!
                </div>
              </div>
              <div className="cursors">
                <div className="cursor">
                  <div
                    className="cursor-wrapper"
                    // onClick={() => updateCursor(<CircleCursor />)}
                    // {...register('pointer')}
                  >
                    {/* <CircleCursor disabled /> */}
                  </div>
                  <h4 className="title">Circle</h4>
                </div>
                <div className="cursor">
                  <div
                    className="cursor-wrapper phinger"
                    // onClick={() => updateCursor(<PhingerCursor />)}
                    // {...register('pointer')}
                  >
                    {/* <PhingerCursor disabled /> */}
                  </div>
                  <h4 className="title">Phinger</h4>
                </div>
                <div className="cursor">
                  <div
                    className="cursor-wrapper"
                    // onClick={() => updateCursor(<EmojiCursor />)}
                    // {...register('pointer')}
                  >
                    {/* <EmojiCursor disabled /> */}
                  </div>
                  <h4 className="title">Emoji</h4>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <div className="label">Opacity</div>
                  <input
                    type="range"
                    name="opacity"
                    id="opacity"
                    // value={state.opacity}
                    onChange={(e) => {
                      // updateOpacity(+e.target.value)
                    }}
                    min={0.1}
                    max={1}
                    step={0.1}
                  />
                  <div className="value">{/* {state.opacity} */}</div>
                </div>
                <div className="option">
                  <div className="label">Delay</div>
                  <input
                    type="range"
                    name="delay"
                    id="delay"
                    // value={state.delay}
                    onChange={(e) => {
                      // updateDelay(+e.target.value)
                    }}
                    min={1}
                    max={40}
                    step={1}
                  />
                  <div className="value">{/* {state.delay} */}</div>
                </div>
              </div>
            </div>
            {/* mouse component 선택 */}
            {/* cursor control section */}
            {/* 
          cursor component mac scroll style
          delay, 
          size, 
          opacity 
          */}
          </div>
        </main>
      </StyledWrapper>
    </Layout>
  )
}
