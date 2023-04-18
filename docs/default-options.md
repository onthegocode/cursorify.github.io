---
sidebar_position: 2
---

# Default options

If you want to set default options for the cursor, you can apply the default cursor component, opacity, and delay. Typically, changing the cursor settings on a website is not common, so it is better to apply your website settings to the default settings.

Refer to the description of each option below.

- cursor: pass the React component you want to apply.
- delay: You can pass a number between 1 and 10.
- opacity: You can pass a number between 0 and 1.

```tsx
import { CursorifyProvider, EmojiCursor } from 'react-cursorify'

const App = () => {
  return (
    <CursorifyProvider cursor={EmojiCursor} delay={2} opacity={0.7}>
      <>{/*....your component */}</>
    </CursorifyProvider>
  )
}

export default App
```
