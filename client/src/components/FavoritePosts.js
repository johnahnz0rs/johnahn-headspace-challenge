import React from 'react';
import dogPic from "../assets/dog.png";

class FavoritePosts extends React.Component {



    // const style = {padding: "10px", margin: "0 auto"};
    render() {
        return (

            <React.Fragment>

                <div className="section-fav-posts">

                    <h2>Favorites:</h2>

                    {/*post text*/}
                    <div className="each-fav-post row">
                        <div className="each-fav-post-content col-sm-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit leo eu mi.</p>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-lg btn-danger btn-add-to-favs">Remove</button>
                        </div>
                    </div>

                    {/*post photo*/}
                    <div className="each-fav-post row">
                        <div className="each-fav-post-content col-sm-8">
                            <img className="img-fav-post" src={dogPic} alt="" />
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-lg btn-danger btn-add-to-favs">Remove</button>
                        </div>
                    </div>

                </div>

            </React.Fragment>
        );
    };
};

export default FavoritePosts;