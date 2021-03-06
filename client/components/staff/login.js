// Client / Components / User / Login

import React from 'react';
import { connect } from 'react-redux';

import { validateUserLogin } from '../../../shared/validations/user/login';
import { staffLoginRequest } from '../../actions/staff/login';
import { flashMessageAdd, flashMessageDelete } from '../../actions/flash-messages';
import InputText from '../common/inputs/text';

class StaffLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        };
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    isValid() {
        const { errors, isValid } = validateUserLogin(this.state);
        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.staffLoginRequest(this.state).then(
                (response) => {
                    this.props.flashMessageAdd({
                        type: 'success',
                        text: 'You have logged in successfully.'
                    });
                    setTimeout(() => this.props.flashMessageDelete(), 3000)
                    this.setState({ isLoading: false });
                    this.context.router.push('/staff');
                },
                (error) => {
                    console.log(error);
                    this.setState({ errors: error.response.data.errors, isLoading: false });
                }
            );
        }
    }

    render() {
        return (
            <section>
                <h2>Login</h2>
                { this.state.errors.form && <div className="alert alert-danger">{ this.state.errors.form }</div> }
                <form onSubmit={ this.onSubmit.bind(this) }>
                    <InputText
                        error={ this.state.errors.username }
                        type="text"
                        value={ this.state.username }
                        onChange={ this.onChange.bind(this) }
                        name="username"
                        id="user-username"
                        label="Username"
                        placeholder="Eg: ECE123"
                    />
                    <InputText
                        error={ this.state.errors.password }
                        type="password"
                        value={ this.state.password }
                        onChange={ this.onChange.bind(this) }
                        name="password"
                        id="user-password"
                        label="Password"
                        placeholder="Password"
                    />

                    <button type="submit" disabled={ this.state.isLoading } className="btn btn-default">Submit</button>
                </form>
            </section>
        );
    }
}

StaffLogin.propTypes = {
    staffLoginRequest: React.PropTypes.func.isRequired,
    flashMessageAdd: React.PropTypes.func.isRequired,
    flashMessageDelete: React.PropTypes.func.isRequired
};

StaffLogin.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect((state) => { return {} }, { staffLoginRequest, flashMessageAdd, flashMessageDelete })(StaffLogin);