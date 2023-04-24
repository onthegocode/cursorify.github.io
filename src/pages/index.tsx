import React, { FC } from 'react'
import StyledWrapper from './index.style'
import {
  useUpdateCursorify,
  useCursorifyState,
  DefaultCursor,
} from '@cursorify/react'
import { PhingerCursor, EmojiCursor } from '@cursorify/cursors'
import { Header } from './_components/Header'
import Layout from '@theme/Layout'

const Home: FC = () => {
  const state = useCursorifyState()
  const { updateCursor, updateOpacity, updateDelay } = useUpdateCursorify()

  return (
    <Layout
      title="Home"
      description="Customizable cursor component in your project."
    >
      <StyledWrapper>
        <Header />
        <main>
          <div className="window common-container">
            <div className="header">
              <div className="lt">
                <div className="btn" data-type="close"></div>
                <div className="btn" data-type="minimize"></div>
                <div className="btn" data-type="maximize"></div>
              </div>
            </div>
            <div className="content">
              <div className="title" style={{ cursor: 'text' }}>
                <h2>Easily customize your mouse cursor 🎉</h2>
                <div className="description" style={{ cursor: 'text' }}>
                  React Cursorify is a library that helps you easily custom the
                  style of the mouse cursor in a React project. <br /> Choose
                  your cursor below!
                </div>
              </div>
              <div className="cursors">
                <div
                  className="cursor"
                  onClick={() => updateCursor(<DefaultCursor />)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="cursor-wrapper shadow--md">
                    <DefaultCursor disabled />
                  </div>
                  <h4 className="title">Default</h4>
                </div>
                <div
                  className="cursor"
                  onClick={() => updateCursor(<PhingerCursor />)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="cursor-wrapper shadow--md phinger">
                    <PhingerCursor disabled />
                  </div>
                  <h4 className="title">Phinger</h4>
                </div>
                <div
                  className="cursor"
                  onClick={() => updateCursor(<EmojiCursor />)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="cursor-wrapper shadow--md">
                    <EmojiCursor disabled />
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
                    value={state.opacity}
                    onChange={(e) => {
                      updateOpacity(+e.target.value)
                    }}
                    min={0.1}
                    max={1}
                    step={0.1}
                  />
                  <div className="value">{state.opacity}</div>
                </div>
                <div className="option">
                  <div className="label">Delay</div>
                  <input
                    type="range"
                    name="delay"
                    id="delay"
                    value={state.delay}
                    onChange={(e) => {
                      updateDelay(+e.target.value)
                    }}
                    min={1}
                    max={40}
                    step={1}
                  />
                  <div className="value">{state.delay}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </StyledWrapper>
    </Layout>
  )
}

export default Home
