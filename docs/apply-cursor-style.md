---
sidebar_position: 3
---

# Apply cursor style

To apply hover style to the cursor, you just set cursor style in your tag. The cursor style should not be applied via classname because cursorify defects the cursor style through the style attribute.

```tsx
const Home = () => {
  return (
    <div>
      <h1 style={{ cursor: 'text' }}>cursorify test</h1>
      <button style={{ cursor: 'pointer' }}>hover me 🕹️</button>
    </div>
  )
}

export default Home
```
