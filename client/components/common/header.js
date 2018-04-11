// Client / Components / Common / Header

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { flashMessageAdd, flashMessageDelete } from '../../actions/flash-messages';
import { userLogout } from '../../actions/user/logout';

class Header extends React.Component {
    logout(event) {
        event.preventDefault();
        this.props.userLogout();
        this.props.flashMessageAdd({
            type: 'success',
            text: 'You have logged out successfully.'
        });
        setTimeout(() => this.props.flashMessageDelete(), 3000)
        this.context.router.push('/');
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const userLinks = (
        <span>
            <Link to="/staff">Home</Link>
            &nbsp; &bull; &nbsp;
                {!isEmpty(this.props.auth.staff) ? (<Link to="/addEvent">Add Event</Link>) : (<Link to="/leaveForm">Leave form</Link>) }
            &nbsp; &bull; &nbsp;
                <a href="#" onClick={this.logout.bind(this)}>Logout</a>
        </span>
        )
        const guestLinks = (
            <span>
                <Link to="/home">Home</Link>
                &nbsp; &bull; &nbsp;
                <Link to="/login">Login</Link>
                &nbsp; &bull; &nbsp;
                <Link to="/register">Register</Link>
                &nbsp; &bull; &nbsp;
                <Link to="/staffLogin">StaffLogin</Link>
            </span>
        );

        return (
            <header>
                <h1>KIT</h1>
                { isAuthenticated  ? userLinks : guestLinks }
            </header>
        );
    }
}

Header.propTypes = {
    auth: React.PropTypes.object.isRequired,
    userLogout: React.PropTypes.func.isRequired,
    flashMessageAdd: React.PropTypes.func.isRequired,
    flashMessageDelete: React.PropTypes.func.isRequired
};

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { userLogout, flashMessageAdd, flashMessageDelete })(Header);