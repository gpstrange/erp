// Client / Components / User / Register

import React from 'react';
import { connect } from 'react-redux';

import { validateUserRegister } from '../../../shared/validations/user/register';
import { userRegisterRequest } from '../../actions/user/register';
import { flashMessageAdd, flashMessageDelete } from '../../actions/flash-messages';
import InputText from '../common/inputs/text';
import InputTextarea from '../common/inputs/textarea';

class UserRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            phone:'',
            aadharNumber:'',
            name:'',
            email: '',
            dept: '',
            community:'',
            address:'',
            year:'',
            section:'',
            accomodation:'',
            bloodGroup:'',
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // isValid() {
    //     const { errors, isValid } = validateUserRegister(this.state);
    //     if(!isValid) {
    //         this.setState({ errors });
    //     }
    //     return isValid;
    // }

    onSubmit(event) {
        event.preventDefault();
        this.setState({errors: {}, isLoading: true});
        this.props.userRegisterRequest(this.state).then(
            (response) => {
                if(!response.data.success){
                    this.setState({ errors: error.response.data.errors, isLoading: false });
                }
                this.props.flashMessageAdd({
                    type: 'success',
                    text: 'You have registered successfully.'
                });
                setTimeout(() => this.props.flashMessageDelete(), 3000)
                this.setState({isLoading: false});
                this.context.router.push('/login');
            },
            (error) => {
                this.setState({errors: error.response.data.errors, isLoading: false});
            }
        );
    }

    render() {
        return (
            <section>
                <h2>Register</h2>
                {this.state.errors.form && <div className="alert alert-danger">{this.state.errors.form}</div>}
                <form onSubmit={ this.onSubmit.bind(this) }>
                    <InputText
                        error={ this.state.errors.username }
                        type="text"
                        value={ this.state.username }
                        onChange={ this.onChange }
                        name="username"
                        id="user-username"
                        label="Username"
                        placeholder="Eg: 711516106037"
                    />
                    <InputText
                        error={ this.state.errors.password }
                        type="password"
                        value={ this.state.password }
                        onChange={ this.onChange }
                        name="password"
                        id="user-password"
                        label="Password"
                        placeholder="Password"
                    />
                    <InputText
                        error={this.state.errors.name}
                        type="text"
                        value={this.state.name}
                        onChange={this.onChange}
                        name="name"
                        id="user-name"
                        label="name"
                        placeholder="Name"
                    />
                    <InputText
                        error={this.state.errors.email}
                        type="text"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        id="user-email"
                        label="email"
                        placeholder="email"
                    />
                    <InputText
                        error={this.state.errors.aadharNumber}
                        type="text"
                        value={this.state.aadharNumber}
                        onChange={this.onChange}
                        name="aadharNumber"
                        id="user-aadharNumber"
                        label="aadharNumber"
                        placeholder="AadharNumber"
                    />
                    <InputText
                        error={this.state.errors.phone}
                        type="text"
                        value={this.state.phone}
                        onChange={this.onChange}
                        name="phone"
                        id="user-phone"
                        label="Phone"
                        placeholder="Mobile Number"
                    />
                    <InputText
                        error={this.state.errors.bloodGroup}
                        type="text"
                        value={this.state.bloodGroup}
                        onChange={this.onChange}
                        name="bloodGroup"
                        id="user-bloodGroup"
                        label="BloodGroup"
                        placeholder="Eg: B+"
                    />
                    <div className="row" style={{ marginBottom: 10 }}>
                        <div className="col-md-2">
                            <label>Year : </label> &nbsp;
                            <select onChange={this.onChange} name="year" value={this.state.year}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label>Dept : </label> &nbsp;
                            <select onChange={this.onChange} name="dept" value={this.state.dept}>
                                <option value='ECE'>ECE</option>
                                <option value='CSE'>CSE</option>
                                <option value='EEE'>EEE</option>
                                <option value='MECH'>MECH</option>
                                <option value='AERO'>AERO</option>
                                <option value='MBA'>MBA</option>
                                <option value='MCA'>MCA</option>
                                <option value='AGRI'>AGRI</option>
                                <option value='BIOTECH'>BIOTECH</option>
                                <option value='BIOMEDICAL'>BIOMEDICAL</option>
                                <option value='S&H'>1st Year</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label>Section : </label> &nbsp;
                            <select onChange={this.onChange} name="section" value={this.state.section}>
                                <option value='A'>A</option>
                                <option value='B'>B</option>
                                <option value='C'>C</option>
                            </select>
                        </div> 
                        <div className="col-md-2">
                            <label>Community</label>&nbsp;
                            <select onChange={this.onChange} name="community" value={this.state.community}>
                                <option value="">BC</option>
                                <option value="MBC">MBC</option>
                                <option value="BCM">BCM</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                                <option value="OC">OC</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label>Accomodation : </label> &nbsp;
                            <select onChange={this.onChange} name="accomodation" value={this.state.accomodation}>
                                <option value='HOSTELLER'>HOSTELLER</option>
                                <option value='DAYSCHOLER'>DAYSCHOLER</option>
                            </select>
                        </div> 
                    </div>
                    <InputTextarea
                        error={this.state.errors.address}
                        value={this.state.address}
                        onChange={this.onChange}
                        name="address"
                        id="address"
                        label="Address"
                        placeholder="Enter the Address"
                        rows="3"
                    />

                    <button type="submit" disabled={ this.state.isLoading } className="btn btn-default">Submit</button>
                </form>
            </section>
        );
    }
}

UserRegister.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired,
    flashMessageAdd: React.PropTypes.func.isRequired,
    flashMessageDelete: React.PropTypes.func.isRequired
};

UserRegister.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect((state) => { return {} }, { userRegisterRequest, flashMessageAdd, flashMessageDelete })(UserRegister);