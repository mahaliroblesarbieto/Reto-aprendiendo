import React, { Component } from 'react';
import axios from 'axios';
import CharInfo from './CharInfo'; 
import './styles/Character.css';


class Character extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
      input: '',
      cryptos: ['1','2','3','4','5','6','7','8','9'], 
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
        console.log(this.state.people);
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
    const list = this.state.people
      .filter((d) => this.state.input === '' || d.name.includes( this.state.input))
      .map((d, index) => 
      <div className="col-md-4" key={index}>
        <div className="template">
        <h1>{d.name}</h1> 
        <CharInfo charInfo={d} /> 
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
        {list
        // people.filter((d) => this.state.input === '' || d.includes(this.state.input)).map((p) => {
        //     return (
        //       <div>
        //         <h1 className="char-name">{p.name}</h1> 
        //         <CharInfo charInfo={p} /> 
        //       </div>
        //     )
        //   })
        }
        </div>
      </div>
      </div>
    );
  }
}

export default Character
