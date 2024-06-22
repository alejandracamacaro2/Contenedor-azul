import React from 'react';
import './Papel.css';

const Papel = (props) => {
  return (
    <img src={props.imagen} className="rounded float-start" /> 
  );
}


export default Papel;