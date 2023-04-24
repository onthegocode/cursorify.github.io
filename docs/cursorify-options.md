---
sidebar_position: 2
---

# Cursorify options

## Default options

If you want to set default options for the cursor, you can apply the default cursor component, opacity, and delay. Typically, changing the cursor settings on a website is not common, so it is better to apply your website settings to the default settings.

Refer to the description of each option below.

- cursor: pass the React component you want to apply.
- delay: You can pass a number between 1 and 10.
- opacity: You can pass a number between 0 and 1.
- visibleDefaultCursor: You can pass a boolean.
- breakpoint: You can set breakpoint to disable in mobile size.

```tsx
import { CursorifyProvider, EmojiCursor } from '@cursorify/react'

const App = () => {
  return (
    <CursorifyProvider
      cursor={<DefaultCursor />}
      opacity={1}
      delay={1}
      defaultCursorVisible={false}
      breakpoint={997}
    >
      <>{/*....your component */}</>
    </CursorifyProvider>
  )
}

export default App
```

# Update options

While it's not common to change the cursor on a website, we provide a hook that allows you to do so. To change the cursor component, use the `useUpdateCursorify` hook. The changeCursor argument should be a React component.

```tsx
import { useUpdateCursorify, PhingerCursor } from '@cursorify/react'

const Home = () => {
  const {
    updateCursor,
    updateDelay,
    updateOpacity,
    updatedefaultCursorVisible,
  } = useUpdateCursorify()

  const handleClick = () => {
    changeCursor(PhingerCursor)
  }
  return (
    <div>
      <button onClick={handleClick}>click me 🕹️</button>
    </div>
  )
}

export default Home
```
