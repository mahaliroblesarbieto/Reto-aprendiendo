import React from 'react';
import { Link } from "react-router-dom";
import './styles/Character.css';
 

function List (props) {
  console.log(props.location.state);
    return ( 
      <div>
        <ul>
          <li><h2>Peso:{props.location.state.info.mass}</h2></li> 
            <li><h2>Año:{props.location.state.info.birth_year}</h2></li> 
            <li><h2>Género:{props.location.state.info.gender}</h2></li> 
        </ul>
        <Link to='/'><p className="btn btn-danger">Volver</p></Link>
      </div>
      );
  }


export default List; 