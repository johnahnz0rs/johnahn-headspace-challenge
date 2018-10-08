import React from 'react';
import Parser from 'html-react-parser';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchBlog: '',
            searchTag: '',
            searchResults: [],
            favoritePosts: []
        };
        this.default = this.default.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.clickHandlerAdd = this.clickHandlerAdd.bind(this);
        this.clickHandlerRemove = this.clickHandlerRemove.bind(this);
        this.searchWithParams = this.searchWithParams.bind(this);
        this.createResultBodies = this.createResultBodies.bind(this);
        this.findPostIndexInArrayById = this.findPostIndexInArrayById.bind(this);
    }

    componentDidMount() {
        // load random posts on app startup
        this.default(Math.floor(Math.random() * 3) + 1);
    }

    default(chance) {
        let rando = 0;
        switch (chance) {
            case 1:
                rando = 'puppy';
                break;
            case 2:
                rando = 'text';
                break;
            case 3:
                rando = 'audio';
                break;
        }
        fetch(`/api/tag/${rando}`)
            .then(res => res.json())
            .then(data => {
                this.createResultBodies(data);
            });
    }

    createResultBodies(postsArray) {
        // create HTML for each post in an array, according to type;
        let returnedPosts = [],
            createBody;
        for (let i of postsArray) {
            switch (i.type) {
                case 'text':
                    createBody = i.body;
                    break;
                case 'photo':
                    createBody = `<p><img src=${i.photos[0].alt_sizes[0].url} alt='' /></p>`;
                    break;
                case 'quote':
                    createBody = `<h4>${i.text}</h4><p>${i.source}<br />type: ${i.type}<br />post_url: ${i.post_url}<br />source_url: ${i.source_url}<br />source_title: ${i.source_title}</p>`;
                    break;
                case 'link':
                    let blurb = i.excerpt ? i.excerpt : '';
                    let pic = i.photos ? i.photos[0].original_size.url : '';
                    createBody = `<h3>${i.title}</h3><img alt="" src=${pic} /> <p>${blurb}<br />(<a href=${i.url} target="_blank">Link</a>)</p>`;
                    break;
                case 'chat':
                    createBody = i.body;
                    break;
                case 'audio':
                    let title = i.source_title ? i.source_title : '';
                    let audio_caption = i.caption ? i.caption : '';
                    let audio_embed = i.embed ? i.embed : '';
                    createBody = `<p>${title}<br />${audio_caption}<br />${audio_embed}  <br />(<a href=${i.source_url} target="_blank">Link</a>)</p>`;
                    break;
                case 'video':
                    let video_caption = i.caption ? i.caption : '';
                    let video_embed = i.player[0] ? i.player[0].embed_code : '';
                    createBody = `<p>${video_caption}<br />${video_embed}</p>`;
                    break;
                case 'answer':
                    createBody = `<p>Q: ${i.question}<br />A: ${i.answer}</p>`;
                    break;
            }
            returnedPosts.push({type: i.type, id: i.id, body: createBody});
        }
        // after pushing all posts, then setState;
        this.setState({searchResults: returnedPosts});
    }

    inputHandler(event) {
        let name = event.target.name,
            value = event.target.value;
        this.setState({[name]: value});
    }

    searchWithParams() {
        // clear state.searchResults before loading new search results;
        this.setState({searchResults: []});
        // search by blog name
        if (this.state.searchBlog.length && !this.state.searchTag.length) {
            fetch(`/api/blog/${this.state.searchBlog}`)
                .then(res => res.json())
                .then(data => {
                    this.createResultBodies(data);
                });
        // search by blog & tag
        } else if (this.state.searchBlog.length && this.state.searchTag.length) {
            fetch(`/api/blog/${this.state.searchBlog}/${this.state.searchTag}`)
                .then(res => res.json())
                .then(data => {
                    this.createResultBodies(data);
                });
        // search by tag
        } else if (!this.state.searchBlog.length && this.state.searchTag.length) {
            fetch(`/api/tag/${this.state.searchTag}`)
                .then(res => res.json())
                .then(data => {
                    this.createResultBodies(data);
                });
        }
    }

    clickHandlerAdd(event) {
        // find this post in state.searchResults
        console.log('*** event.target.id ***', event.target.id);
        const eventIndex = this.findPostIndexInArrayById(event.target.id, this.state.searchResults);
        // add post to state.favPosts
        let tempFavPosts = this.state.favoritePosts.slice();
        tempFavPosts.push(this.state.searchResults[eventIndex]);
        this.setState({favoritePosts: tempFavPosts});
        // remove post from state.searchResults
        let tempSearchResults = this.state.searchResults.slice();
        tempSearchResults.splice(eventIndex, 1);
        this.setState({searchResults: tempSearchResults});
    }

    clickHandlerRemove(event) {
        // find post in state.favPosts
        const eventIndex = this.findPostIndexInArrayById(event.target.id, this.state.favoritePosts);
        // remove post from state.favPosts
        let tempFavPosts = this.state.favoritePosts.slice();
        tempFavPosts.splice(eventIndex, 1);
        this.setState({favoritePosts: tempFavPosts});
    }

    findPostIndexInArrayById(id, array) {
        for (let i in array) {
            if (array[i].id == id) {
                return i;
            }
        }
    }

    render() {
        let searchResultsBody = this.state.searchResults.map(item => {
            return (
                <div key={item.id} className="each-search-result row">
                    <div className="each-search-result-content col-sm-8">
                        {Parser(item.body)}
                    </div>
                    <div className="each-search-result-button-area col-sm-3">
                        <button id={item.id} className="btn btn-add btn-lg btn-success" onClick={this.clickHandlerAdd}>Add</button>
                        <p>{item.type}</p>
                    </div>
                </div>
            );
        });

        let favPostsBody;
        if (this.state.favoritePosts[0]) {

            favPostsBody = this.state.favoritePosts.map(item => {
                return (
                    <div key={item.id} className="each-fav-post row">
                        <div className="each-fav-post-content col-sm-8">
                            {Parser(item.body)}
                        </div>
                        <div className="each-fav-post-button-area col-sm-3">
                            <button id={item.id} className="btn btn-lg btn-danger" onClick={this.clickHandlerRemove}>Remove</button>
                            <p>{item.type}</p>
                        </div>
                    </div>
                );
            });
        }

        return (
            <React.Fragment>
                <div className="my-container">
                    {/*left-col: search & results*/}
                    <div className="col col-sm-6 col-search-comp">
                        {/*Search Bars*/}
                        <div className="row section-search">
                            <div className="col-sm-6 search-by">
                                <h3>Blog Name:</h3>
                                <input className="search-input search-blog" type="text" name="searchBlog" placeholder="ex: peacecorps" value={this.state.searchBlog} onChange={this.inputHandler}/>
                            </div>
                            <div className="col-sm-6 search-by">
                                <h3>Tag:</h3>
                                <input className="search-input search-tag" type="text" name="searchTag" placeholder="ex: gif" value={this.state.searchTag} onChange={this.inputHandler} />
                                <button className="btn btn-lg btn-primary btn-search" onClick={this.searchWithParams}>Search</button>
                            </div>
                        </div>
                        {/*Search Results*/}
                        <div className="row section-search-results">
                            {/*{this.state.searchResults && <SectionSearchResults searchResults={this.state.searchResults} />}*/}
                            {searchResultsBody}
                        </div>
                    </div>

                    {/*right-col: fav posts*/}
                    <div className="col col-sm-6 col-favorites-comp">
                        <div className="row section-fav-posts">
                            <div className="favorites-header">
                                <h2>Favorites:</h2>
                            </div>
                            {/*Fav Posts*/}
                            <div>
                                {favPostsBody}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;