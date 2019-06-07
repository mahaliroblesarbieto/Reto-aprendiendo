import React, { Component } from 'react';

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
      return <p className="btn btn-info" onClick={this.open}>VER DETALLE</p>
    }

    return(
      <div className="user-details">
        <p className="btn btn-danger" onClick={this.close}>Hide info</p>
        <ul>
          <li><h2>Peso: {info.mass}</h2></li> 
            <li><h2>Año: {info.birth_year}</h2></li> 
            <li><h2>Género: {info.gender}</h2></li> 
        </ul>
      </div>
    )
  }
}

export default CharInfo; 