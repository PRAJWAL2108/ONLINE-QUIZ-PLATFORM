import React, {Fragment} from 'react';
//import { Link } from'react-router-dom';
import { Helmet } from 'react-helmet';

const Quit = () => (
    <Fragment>
        <Helmet><title> Quiz-App End</title></Helmet>
            <div className="Quit">
                <h3> Thank you for playing our quiz !! Hope it was informative and super-fun !!</h3>
            </div>
    </Fragment>
);

export default Quit;