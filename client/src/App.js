import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callAPI()
        .then(res => this.setState({response: res.express}))
        .catch(err => console.log(err));
  }

  callAPI = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) { throw Error(body.message) };
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React this is ur homeboi johnahnz0rs coming to u live and direct from the batcave. holla!</h1>
        </header>
      </div>
    );
  }
}

export default App;
