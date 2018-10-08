import React from "react";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'johnahnz0rsisl33t.com',
            something: 'lol',
            nothing: 0,
            searchResults: '',
            searchBlog: '',
            searchTag: ''
        };
        this.search = this.search.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    };

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t on Search ***');
    }

    search() {
        // your code here
        console.log(`*** you clicked the search button {searchBlog: ${this.state.searchBlog}, searchTag: ${this.state.searchTag}  ***`);
    }

    inputHandler(event) {
        let name = event.target.name,
            value = event.target.value;
        this.setState({[name]: value});
    }

    render() {

        return (
            <React.Fragment>
                {/*Search.js is the div containing the form for the search box*/}

                <div className="col-sm-6 search-by">
                    <h3>Blog Name:</h3>
                    <input className="search-input search-blog" type="text" name="searchBlog" placeholder="ex: peacecorps" value={this.state.searchBlog} onChange={this.inputHandler}/>
                </div>
                <div className="col-sm-6 search-by">
                    <h3>Tag:</h3>
                    <input className="search-input search-tag" type="text" name="searchTag" placeholder="ex: gif" value={this.state.searchTag} onChange={this.inputHandler} />
                    <button className="btn btn-lg btn-primary btn-search" onClick={this.search}>Search</button>
                </div>

            </React.Fragment>
        );
    }
}

export default Search;