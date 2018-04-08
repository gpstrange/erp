// Client / Components / Common / Footer

import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                &copy; 2018 <Link to="/">Powered by NCDRC - KIT</Link>
            </footer>
        );
    }
}

export default Footer;