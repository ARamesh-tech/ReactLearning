import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
        <img src={props.imageUrl} alt="" width="200px" height="250px"/>
        <h1>{props.name}</h1>
        <h3>{props.role}</h3>
    </div>
  )
}

export default Card