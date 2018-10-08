import React from 'react';
import dogPic from '../assets/dog.png';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            something: '{lol: "yas"}',
            nothing: 0,
            backendURL: 'http://localhost:5000'
        };
        this.addToFavs = this.addToFavs.bind(this);
    }

    addToFavs() {
        console.log('*** lol u clicked the add button on a search result ***');
    }

    render() {
        return (
            <React.Fragment>

                {/*post text*/}
                <div className="each-search-result row">
                    <div className="each-search-result-content col-sm-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit leo eu mi.</p>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-lg btn-success btn-add-to-favs">Add</button>
                    </div>
                </div>

                {/*post photo*/}
                <div className="each-search-result row">
                    <div className="each-search-result-content col-sm-8">
                        <img className="img-search-result" src={dogPic} alt="" />
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-lg btn-success btn-add-to-favs">Add</button>
                    </div>
                </div>



            </React.Fragment>
        );
    };
};

export default SearchResults;