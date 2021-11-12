import React, {Fragment} from 'react';
//import { Link } from'react-router-dom';
import { Helmet } from 'react-helmet';

const QuitBetween = () => (
    <Fragment>
        <Helmet><title> Quiz-App End</title></Helmet>
            <div className="QuitBetween">
                <h3> Uh Oh !! You have exited the Quiz. Please vist us back to enjoy the quiz. </h3>
            </div>
    </Fragment>
);

export default QuitBetween;