import React from 'react'
import VansData from '../VansData'

function Vans() {

  const vanElements = VansData.map(van => {
    return (
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} alt="van"/>
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    )
  })

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}

export default Vans