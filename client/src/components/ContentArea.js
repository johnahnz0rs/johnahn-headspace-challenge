import React from 'react';
import { Route } from 'react-router-dom';
// import User from './User';
// import AgiliqTest from './AgiliqTest';
import Home from './Home';


const ContentArea = props => {

    return (
        <React.Fragment>
            <div className="root-div">

                {/*<Route exact path="/" component={Login} />*/}
                {/*<Route path="/user" component={User} />*/}
                {/*<Route path="/profile/:id" component={Profile} />*/}

                {/*<Route exact path = "/" component={AgiliqTest} />*/}
                <Route exact path = "/" component={Home} />

            </div>
        </React.Fragment>
    );

};

export default ContentArea;
