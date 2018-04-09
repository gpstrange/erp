// Client / Components / Pages / Tweet

import React from 'react';
import { connect } from 'react-redux';
import '../common/css/less/input-moment.less';
// import '../common/css/app.less';

import { validateTweet } from '../../../shared/validations/tweets';
import { addEventRequest } from '../../actions/pages/addEvent';
import { flashMessageAdd } from '../../actions/flash-messages';
import InputTextarea from '../common/inputs/textarea';
import Text from '../common/inputs/text';
import InputMoment from "input-moment";
import moment from 'moment';


class AddEventPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            eventName: '',
            description: '',
            errors: {},
            m1: moment(),
            m2: moment(),
            isLoading: false,
        };
    }

    onChange(event) {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmit(event) {
        event.preventDefault();
        if (true) {
            this.setState({ errors: {}, isLoading: true });
            this.props.addEventRequest(this.state).then(
                (response) => {
                    console.log(response);
                    this.props.flashMessageAdd({
                        type: 'success',
                        text: 'Event added!'
                    });
                    this.setState({ isLoading: false });
                    this.context.router.push('/home');
                },
                (error) => {
                    this.props.flashMessageAdd({
                        type: 'Failed',
                        text: 'Event creation failed!'
                    });
                    console.log(11111111111111111111111)
                    console.log(error.response.data);
                    this.setState({ errors: error.response.data.errors, isLoading: false });
                }
            );
        }
    }
    handleChange(m) {
        this.setState({ m1: m });
    };
    handleChange2(m) {
        this.setState({ m2: m });
    };
    handleSave() {
        console.log('saved', this.state.m1.format('llll'));
    };

    render() {
        return (
            <section>
                <h2>Event add form</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <Text
                        type="text"
                        value={this.state.parentMobile}
                        onChange={this.onChange.bind(this)}
                        name="eventName"
                        id="eventName"
                        label="EventName"
                        placeholder="Enter event name"
                    />
                    <InputTextarea
                        error={this.state.errors.form}
                        value={this.state.reason}
                        onChange={this.onChange.bind(this)}
                        name="description"
                        id="description"
                        label="Description"
                        placeholder="Enter the description"
                        rows="3"
                    />
                    <div className="row">
                        <div className="col-md-6">
                            <Text type="text" id="m1" label="From" value={this.state.m1.format('llll')} readOnly />
                            <InputMoment
                                moment={this.state.m1}
                                onChange={this.handleChange.bind(this)}
                                onSave={this.handleSave.bind(this)}
                                name="m1"
                                minStep={1} // default
                                hourStep={1} // default
                                prevMonthIcon="ion-ios-arrow-left" // default
                                nextMonthIcon="ion-ios-arrow-right" // default
                            />
                        </div>
                        <div className="col-md-6">
                            <Text type="text" id="m2" label="To" value={this.state.m2.format('llll')} readOnly />
                            <InputMoment
                                moment={this.state.m2}
                                onChange={this.handleChange2.bind(this)}
                                onSave={this.handleSave.bind(this)}
                                minStep={1} // default
                                hourStep={1} // default
                                prevMonthIcon="ion-ios-arrow-left" // default
                                nextMonthIcon="ion-ios-arrow-right" // default
                            />
                        </div>
                    </div>
                    <button type="submit" disabled={this.state.isLoading} style={{ marginTop: 20 }} className="btn btn-primary">Submit</button>
                </form>
            </section>
        );
    }
}

AddEventPage.propTypes = {
    addEventRequest: React.PropTypes.func.isRequired,
    flashMessageAdd: React.PropTypes.func.isRequired
};

AddEventPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect((state) => { return {} }, { addEventRequest, flashMessageAdd })(AddEventPage);