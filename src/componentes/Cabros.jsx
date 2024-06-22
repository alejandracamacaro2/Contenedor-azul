import './Cabros.css';
import React from 'react'

function Cabros({imagen="cabros"}) {
  return (
    <div>
        <div className="cabros">
     <img src={imagen} className="rounded float-end" /> 
     </div>
    </div>
  )
}
export default Cabros