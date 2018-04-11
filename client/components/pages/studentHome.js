// Client / Components / Pages / Home

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import isEmpty from 'lodash/isEmpty';

import { eventGetRequest } from '../../actions/pages/studentHome';
import Pagination from '../common/pagination';
import { flashMessageDelete } from '../../actions/flash-messages';
import EventItem from './EventItem';

class studentHomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            eventCount: 0,
            noEvents: false,
            errors: {},
            isLoading: false,
        }
    }

    componentWillReceiveProps(newProps) {
        this.getTweets();
    }

    componentWillMount() {
        this.getTweets();
    }

    getTweets() {
        this.setState({ errors: {}, isLoading: true });
        this.props.eventGetRequest(this.state).then(
            (response) => {
                console.log(response);
                this.setState({ isLoading: false });
                if (!isEmpty(response.data.events)) {
                    this.setState({ events: response.data.events, eventCount: response.data.eventCount });
                } else {
                    this.setState({ noEvents: true });
                }
            },
            (error) => {
                console.log(error.response.data);
                this.setState({ errors: error.response.data.errors, isLoading: false });
            }
        );
    }

    render() {
        const events = this.state.events.map((event, i) => {
            return <EventItem key={i} event={event} />
        });
        const pleaseWaitMessage = <p>Please wait...</p>;
        const noEventsMessage = <p>Strange. No Upcoming Events.
            {/* <Link to="/tweet">Tweet now</Link> */}
        </p>;
        return (
            <section>
                <h2>All Events</h2>
                {this.state.isLoading ? pleaseWaitMessage : events}
                {this.state.noEvents ? noEventsMessage : ''}
                <hr />
                {/* <Pagination current={ this.state.page } count={ this.state.tweetCount }/> */}
            </section>
        );
    }
}

studentHomePage.propTypes = {
    eventGetRequest: React.PropTypes.func.isRequired
};

export default connect((state) => { return {} }, { eventGetRequest })(studentHomePage);