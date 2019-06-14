import React, { Component } from 'react';
import axios from 'axios';
import './styles/Character.css';
import { Link } from "react-router-dom";

class Character extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
      input: '',
      cryptos: ['1','2','3','4','5','6','7','8','9'],
      // info: props.info,
    }

    this.getPeople = this.getPeople.bind(this); 
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  getPeople(){
    const cryptos = this.state.cryptos;
    for (var i = 0; i < cryptos.length; i++){       
      const cryptoUrl = 'https://swapi.co/api/people/?page=' + cryptos[i];
      axios.get(cryptoUrl)
        .then((response) => {
        this.setState(state => {
          const people = state.people.concat(response.data.results);
          return {
            people,
          };
        });
    })
    }
    
  }

  componentDidMount(){
    this.getPeople()
  }

  render() {
    // const newInput = this.state.input.charAt(0).toUpperCase() + this.state.input.toLowerCase().slice(1);
    const inputLowerCase = this.state.input.toLowerCase();
    // inputLowerCase.match(/\d+/g) !== null ? inputLowerCase.toUpperCase() : inputLowerCase
    const newInput = inputLowerCase.replace(/\b\w/g, l => l.toUpperCase());
    const list = this.state.people
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .filter((d) => newInput === '' || d.name.includes( newInput))
      .map((d, index) => 
      <div className="col-md-4" key={index}>
        <div className="template">
        <h1>{d.name}</h1> 
        <Link to={{ pathname: '/List', state: { info: d }}}><button className="btn btn-info">VER DETALLE</button></Link>
        </div>
      </div>
      );
    return (
      <div className="App">
        <div>
        <div className="row margin">
          <h1 className="size">STAR WARS</h1>
        </div>
        <div className="row margin-top">
          <p className="size-p">PERSONAJES</p>
        </div>
        <form className="input-bottom">
        <input
            className = "input-search"
            value={this.state.input} 
            type="text"
            placeholder="BUSCAR"
            onChange={this.handleInputChange.bind(this)}
        />
        </form>
        <div className="row">
        {list}
        </div>
      </div>
      </div>
    );
  }
}

export default Character
