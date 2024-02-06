import React from 'react'

function Banner(props) {
    const {val,details} = props
  return (
    <div>
        <div className="banner-details">
          <h3>{val}</h3>
          <h4>{details}</h4>
      </div>
    </div>
  )
}

export default Banner