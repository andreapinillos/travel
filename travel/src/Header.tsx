import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Jumbotron className="App">
                <h1>Find Your Next Travel Destination</h1>
            </Jumbotron>
        );
    }
}

export default Header;