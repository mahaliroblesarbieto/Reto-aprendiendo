import React, { Component } from 'react'

class Search extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
    <div>
      <div className="row">
        <h1>STAR WARS</h1>
      </div>
      <div className="row">
        <h2>PERSONAJES</h2>
      </div>
      <form>
        <input
            placeholder="BUSCAR"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    </div>
   )
 }
}

export default Search
