import React from 'react';
import { Link } from "react-router-dom";
import './styles/List.css';
 

function List (props) {
  
    return ( 
      <div className="margin-h1">
        <h1 className="size-h1 margin-h1">{props.location.state.info.name}</h1>
        <div className="margin-info">
          <p>Peso: {props.location.state.info.mass === 'unknown' ? 'Desconocido' : props.location.state.info.mass}</p>
          <p>Año: {props.location.state.info.birth_year === 'unknown' ? 'Desconocido' : props.location.state.info.birth_year}</p>
          <p>Género: {props.location.state.info.gender}</p> 
        </div>
        <div>
        <Link to='/'><p className="btn btn-danger">Volver</p></Link>
        </div>
      </div>
      );
  }


export default List; 