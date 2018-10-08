import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ContentArea from './components/ContentArea';

class App extends Component {

  state = {
    // response: ''
  };

  componentDidMount() {
    // this.callAPI()
    //     .then(res => this.setState({response: res.express}))
    //     .catch(err => console.log(err));
  }

  // callAPI = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) { throw Error(body.message) };
  //   return body;
  // };

  render() {
    return (
      <BrowserRouter>
          <React.Fragment>
              <ContentArea />
          </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
