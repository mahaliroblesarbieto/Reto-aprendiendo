import React, { Component } from 'react';
import CharInfo from './CharInfo'; 

class List extends Component {
  render() {
    const people = this.props.people; 

    return (
      <div>
        <div className="row">
          <h1>STAR WARS</h1>
        </div>
        <div className="row">
          <h2>PERSONAJES</h2>
        </div>
        {/* <form>
          <input
            placeholder="BUSCAR"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form> */}
        {
        people.map((p) => {
            return (
              <div>
                <h1 className="char-name">{p.name}</h1> 
                <CharInfo charInfo={p} /> 
              </div>
            )
          })
        }
      </div>
      );
  }
}

export default List; 