import React, { Component } from 'react';
import { Link } from "react-router-dom";
 

class List extends Component {
  render() {
    

    return (
      <div>
        <ul>
          <li><h2>Peso:</h2></li> 
            <li><h2>Año:</h2></li> 
            <li><h2>Género:</h2></li> 
        </ul>
        <Link to='/'><p className="btn btn-danger">Volver</p></Link>
      </div>
      );
  }
}

export default List; 