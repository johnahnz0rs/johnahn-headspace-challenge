import React from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import FavoritePosts from "./FavoritePosts";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            something: '{lol: "yas"}',
            nothing: 0,
            backendURL: 'http://localhost:5000'
        };
        this.sampleMethod = this.sampleMethod.bind(this);
    }

    componentDidMount() {
        console.log('*** johnahnz0rs is l33t on Home ***');
        // your code here
    }

    sampleMethod() {
        console.log('*** johnahnz0rs is l33t this is sampleMethod() ***');
    }

    render() {
        return (

          <React.Fragment>

              <div className="container">

                  {/*left-col: search & results*/}
                  <div className="col col-sm-6 col-search-comp">
                      {/* your code here */}
                      <div className="row section-search">
                          <Search />
                      </div>
                      <div className="row section-search-results">
                          <SearchResults />
                      </div>
                  </div>

                  {/*right-col: fav posts*/}
                  <div className="col col-sm-6 col-favorites-comp">
                      <div className="row section-fav-posts">
                          <FavoritePosts />
                      </div>
                  </div>

              </div>

          </React.Fragment>

        );
    }
};

// import React, { Component } from 'react';
//
// class App extends Component {
//     constructor(props) {
//     super(props);
//
//     this.state = {
//     isShow: true,
// };
// }
//
//     toggleShow = () => {
//     this.setState(state => ({ isShow: !state.isShow }));
// };
//
//     render() {
//     return (
//     <div>
//     {this.state.isShow ? <Greeting greeting={greeting} /> : null}
//
//     <button onClick={this.toggleShow} type="button">
//     Toggle Show
//     </button>
//     </div>
//     );
// }
// }
//
// const Greeting = ({ greeting }) => <h1>{greeting}</h1>;
//
// export default App;


export default Home;