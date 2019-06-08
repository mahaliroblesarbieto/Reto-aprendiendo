import React from 'react';
import { Link } from "react-router-dom";
import './styles/Character.css';
 

function List (props) {
  console.log(props.location.state.info)
    return ( 
      <div>
        <h1>{props.location.state.info.name}</h1>
        <div>
          <h2>Peso:{props.location.state.info.mass}</h2>
          <h2>Año:{props.location.state.info.birth_year}</h2>
          <h2>Género:{props.location.state.info.gender}</h2> 
        </div>
        <div>
        <Link to='/'><p className="btn btn-danger">Volver</p></Link>
        </div>
      </div>
      );
  }


export default List; 