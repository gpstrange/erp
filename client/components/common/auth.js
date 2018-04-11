// Client / Components / Common / Auth

import React from 'react';
import { connect } from 'react-redux';

import { flashMessageAdd, flashMessageDelete } from '../../actions/flash-messages';

export default function(ComposedComponent) {
    class Auth extends React.Component {
        componentWillMount() {
            if(!this.props.isAuthenticated) {
                this.props.flashMessageAdd({
                    type: 'error',
                    text: 'You need to be logged in to access this page.'
                });
                setTimeout(() => this.props.flashMessageDelete(), 3000)
                this.context.router.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.isAuthenticated) {
                this.context.router.push('/login');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Auth.propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired,
        flashMessageAdd: React.PropTypes.func.isRequired,
        flashMessageDelete: React.PropTypes.func.isRequired
    };

    Auth.contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    function mapStateProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateProps, { flashMessageAdd, flashMessageDelete })(Auth);
}