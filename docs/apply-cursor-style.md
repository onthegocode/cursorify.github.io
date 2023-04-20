---
sidebar_position: 3
---

# Apply cursor style

To apply hover style to the cursor, you must use the `useHoverRegister` hook. You can use the hook as follows. For the register argument, write the [cursor style keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#values).

```tsx
import { useHoverRegister } from '@cursorify/react'

const Home = () => {
  const register = useHoverRegister()
  return (
    <div>
      <button {...register('pointer')}>hover me 🕹️</button>
    </div>
  )
}

export default Home
```
