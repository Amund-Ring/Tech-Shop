import React from "react"
import JSONData from "../../content/products.json"

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{JSONData.title}</h1>
    <ul>
      {JSONData.items.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.brand}</li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime