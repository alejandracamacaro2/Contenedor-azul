import React from "react";
import "./Arco.css";
import Text from './Text'

function Arco({imagen="Arco"}) {
    return (
        <div className="contenedor-imagen1"  style={{ position: "absolute", top: 78, right: 0, textAlign: "right" }}>
          <img src={imagen} className="foto-img rounded float-end" />
          <div className="text-letra">
            <Text />
           
          </div>
        </div>
      );
    }
  

export default Arco;
