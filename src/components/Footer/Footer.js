import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="color">
                <div className="footer-container" >
                    <div>
                        <h4>Basic </h4>
                    </div>
                    <div>
                        <h4>Contact </h4>
                        <p>Email:</p>
                        <p>Phone:</p>
                    </div>
                    <div>
                        <h4>Category One </h4>
                    </div>
                    
                </div>
                    <p> &copy;Copyright 2021 All Rights Reserved</p>
            </div>
        );
    }
}

export default Footer;
