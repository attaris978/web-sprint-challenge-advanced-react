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
        message: "You can't go up"
      })
    }

    else if (this.state.y + yVar < 1) {
      this.setState( {
        ...this.state,
        message: "You can't go down"
      })
    }

    else {
      this.setState( {
        ...this.state,
        x: this.state.x + xVar,
        y: this.state.y + yVar,
        steps: this.state.steps + 1
      })
    }

  }

  // fetch("http://localhost:9000/api/result", {
  //     method: "POST",
  //     headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //         'x':1,
  //         'y':1,
  //         'steps':1,
  //         'email':"lady@gaga.com"
  //     })
  // })
  // .then(response => response.json())
  // .then(json => console.log(json))
  // .catch(error => console.error(error));

  render() {
    const { className } = this.props;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    );
  }
}
