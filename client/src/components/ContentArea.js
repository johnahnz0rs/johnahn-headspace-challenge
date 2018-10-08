import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';


const ContentArea = props => {

    return (
        <React.Fragment>
            <div className="root-div">

                <Route exact path = "/" component={Home} />

            </div>
        </React.Fragment>
    );

};

export default ContentArea;
