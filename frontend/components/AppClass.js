import React from "react";


export default class AppClass extends React.Component {
  state = {
    x: 2,
    y: 2,
    steps: 0,
    email: "",
    message: ""
  };

  resetState = () => {
    this.setState({
      x: 2,
      y: 2,
      steps: 0,
      email: "",
      message: ""
    });
  };

  updateLocation = (xVar,yVar) => {
    
    if (this.state.x + xVar > 3) {
      this.setState( {
        ...this.state,
        message: "You can't go right"
      })
    }

    else if (this.state.x + xVar < 1) {
      this.setState( {
        ...this.state,
        message: "You can't go left"
      })
    }

    else if (this.state.y + yVar > 3) {
      this.setState( {
        ...this.state,
        message: "You can't go down"
      })
    }

    else if (this.state.y + yVar < 1) {
      this.setState( {
        ...this.state,
        message: "You can't go up"
      })
    }

    else {
      this.setState( {
        ...this.state,
        x: this.state.x + xVar,
        y: this.state.y + yVar,
        steps: this.state.steps + 1,
        message: ""
      })
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/api/result", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
  })
  .then(response => response.json())
  .then(json => this.setState( {
    ...this.state,
    message: json.message
  }) )
  .catch(error => console.error(error));

  this.setState( {
    ...this.state,
    email: ""
  })

  }  

  handleChange = (e) => {
    this.setState( {
      ...this.state,
      email: e.target.value
    })
  }

  
  render() {
    const { className } = this.props;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${this.state.x}, ${this.state.y}`})</h3>
         {this.state.steps === 1 ? <h3 id="steps">You moved 1 time</h3> : <h3 id="steps">You moved {this.state.steps} times</h3> }
        </div>
        <div id="grid">
          <div className={`square ${this.state.x === 1 && this.state.y === 1 ? 'active' : ''}`}>{this.state.x === 1 && this.state.y === 1 ? "B" : ""}</div>
          <div className={`square ${this.state.x === 2 && this.state.y === 1 ? 'active' : ''}`}>{this.state.x === 2 && this.state.y === 1 ? "B" : ""}</div>
          <div className={`square ${this.state.x === 3 && this.state.y === 1 ? 'active' : ''}`}>{this.state.x === 3 && this.state.y === 1 ? "B" : ""}</div>
          <div className={`square ${this.state.x === 1 && this.state.y === 2 ? 'active' : ''}`}>{this.state.x === 1 && this.state.y === 2 ? "B" : ""}</div>
          <div className={`square ${this.state.x === 2 && this.state.y === 2 ? 'active' : ''}`}>{this.state.x === 2 && this.state.y === 2 ? "B" : ""}</div>
          <div className={`square ${this.state.x === 3 && this.state.y === 2 ? 'active' : ''}`}>{this.state.x === 3 && this.state.y === 2 ? "B" : ""}</div>
          <div className={`square ${this.state.x === 1 && this.state.y === 3 ? 'active' : ''}`}>{this.state.x === 1 && this.state.y === 3 ? "B" : ""}</div>
          <div className={`square ${this.state.x === 2 && this.state.y === 3 ? 'active' : ''}`}>{this.state.x === 2 && this.state.y === 3 ? "B" : ""}</div>
          <div className={`square ${this.state.x === 3 && this.state.y === 3 ? 'active' : ''}`}>{this.state.x === 3 && this.state.y === 3 ? "B" : ""}</div>
          
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={() => this.updateLocation(-1,0)}>LEFT</button>
          <button id="up" onClick={() => this.updateLocation(0,-1)}>UP</button>
          <button id="right" onClick={() => this.updateLocation(1,0)}>RIGHT</button>
          <button id="down" onClick={() => this.updateLocation(0,1)}>DOWN</button>
          <button id="reset" onClick={() => this.resetState()}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email" value={this.state.email} onChange={ e => this.handleChange(e)}></input>
          <input id="submit" type="submit" onClick={ e => this.handleSubmit(e)}></input>
        </form>
      </div>
    );
  }
}
