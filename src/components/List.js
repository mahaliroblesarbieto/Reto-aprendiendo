import React from 'react';
import { Link } from "react-router-dom";
import './styles/Character.css';
 

function List (props) {
  console.log(props.info);
    return ( 
      <div>
        <ul>
          <li><h2>Peso:{props.info.mass}</h2></li> 
            <li><h2>Año:{props.info.birth_year}</h2></li> 
            <li><h2>Género:{props.info.gender}</h2></li> 
        </ul>
        <Link to='/'><p className="btn btn-danger">Volver</p></Link>
      </div>
      );
  }


export default List; 