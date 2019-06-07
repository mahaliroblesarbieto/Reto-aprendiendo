import React, { Component } from 'react';
// import List from './List'; 
import { Link } from "react-router-dom";


class CharInfo extends Component {
  constructor(props){
    super(props); 

    this.state = {
      expanded: false,  
    }

    this.open = this.open.bind(this); 
    this.close = this.close.bind(this); 
  }

  open(){
    this.setState({ expanded: !this.state.expanded })
  }

  close(){
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const info = this.props.charInfo; 

    if(!this.state.expanded){
      return (<Link to='/List'><p className="btn btn-info">VER DETALLE</p></Link>)
      // return <p className="btn btn-info" onClick={this.open}>VER DETALLE</p>
    }

    return(
      <div className="user-details">
        {/* <Link to='/List/'><p className="btn btn-danger">Hide info</p></Link> */}
        <p className="btn btn-danger" onClick={this.close}>Hide info</p>
        <ul>
          <li><h2>Peso: {info.mass}</h2></li> 
            <li><h2>Año: {info.birth_year}</h2></li> 
            <li><h2>Género: {info.gender}</h2></li> 
        </ul>
        {/* <List/> */}
      </div>
    )
  }
}

export default CharInfo; 