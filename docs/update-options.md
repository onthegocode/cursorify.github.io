---
sidebar_position: 4
---

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
