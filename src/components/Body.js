// Component for home page body

import React from 'react'
const Body = ({data}) => {
  console.log(data);
  return (
    <div className='body'>
        <h1>{data.heading}</h1>
        <h3>{data.subheading}</h3>
        <span>{data.note}</span>

        <ul>
          {data.features.map((item, i) => (<li key={i}>{item}</li>))}
        </ul>
    
    </div>
  )
}

export default Body