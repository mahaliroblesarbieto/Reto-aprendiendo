import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class Character extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
      cryptos: ['1','2','3','4','5','6','7','8','9'], 
    }

    this.getPeople = this.getPeople.bind(this); 
  }

  getPeople(){
    const cryptos = this.state.cryptos;
    // const people = this.state.people;
    for (var i = 0; i < cryptos.length; i++){       
      const cryptoUrl = 'https://swapi.co/api/people/?page=' + cryptos[i];
      axios.get(cryptoUrl)
        .then((response) => {
        // console.log(response.data); 
        // console.log(cryptoUrl)
        console.log(this.state.people);
        this.setState( {people: response.data.results} )
    })
    }
    
  }

  componentDidMount(){
    this.getPeople()
  }

  render() {
    const {people} = this.state; 
    return (
      <div className="App">
        <List people={people} />
      </div>
    );
  }
//  state = {
//    query: '',
//  }

//  getInfo = () => {
//   return axios.get("http://swapi.co/api/people")
//   .then((response) => {
//     console.log(response.data.results); 
//     this.setState( { results: response.data.results } )
//   })
// }

// //  getInfo = () => {
// //   axios.get('http://swapi.co/api/people/1')
// //     .then(({ data }) => {
// //       this.setState({
// //         results: data.data // MusicGraph returns an object named data, 
// //                            // as does axios. So... data.data                             
// //       })
// //     })
// // }

// handleInputChange = () => {
//   this.setState({
//     query: this.search.value
//   }, () => {
//     if (this.state.query && this.state.query.length > 1) {
//       if (this.state.query.length % 2 === 0) {
//         this.getInfo()
//       }
//     } 
//   })
// }

//  render() {
//    return (
//     <div>
      // <div className="row">
      //   <h1>STAR WARS</h1>
      // </div>
      // <div className="row">
      //   <h2>PERSONAJES</h2>
      // </div>
      // <form>
      //   <input
      //       placeholder="BUSCAR"
      //       ref={input => this.search = input}
      //       onChange={this.handleInputChange}
      //   />
      //   <p>{this.state.query}</p>
      // </form>
//     </div>
//    )
//  }
}

export default Character
