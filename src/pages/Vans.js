import React from 'react'
import { Link } from "react-router-dom"
import VansData from '../VansData'

function Vans() {

  const vanElements = VansData.map(van => {
    return (
      <div key={van.id} className="van-tile">
        <Link to={`/vans/${van.id}`} >
          <img src={van.imageUrl} alt="van"/>
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
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