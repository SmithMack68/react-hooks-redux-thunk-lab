import React from 'react'

const CatList = ({ catPics }) => {
  return (
    <div>
        {catPics.map((pic) => (
           <img key={pic.id} src={pic.url} alt="cat"></img> 
        ))}
    </div>
  )
}

export default CatList

