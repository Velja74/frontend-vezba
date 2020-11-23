import React from 'react';
import { Link } from "react-router-dom";



class Confirmation extends React.Component {
    render() {
        return (
            <div>
                <h2>Thank you. Your data is submitted.</h2>
                <Link to="/">Go back to Home page</Link>
            </div> 
        );
    }
}

export default Confirmation;
