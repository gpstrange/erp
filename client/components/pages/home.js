// Client / Components / Pages / Home

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import isEmpty from 'lodash/isEmpty';

import { tweetGetRequest } from '../../actions/pages/tweet';
import Pagination from '../common/pagination';
import TweetItem from './tweet-item';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leaveRequests: [],
            leaveRequestCount: 0,
            noLeaveRequests: false,
            errors: {},
            isLoading: false,
            page: ((this.props.params.page) ? parseInt(this.props.params.page) : 1)
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ page: parseInt(newProps.params.page) }, () => {
            this.getTweets();
        });
    }

    componentWillMount() {
        this.getTweets();
    }

    getTweets() {
        this.setState({ errors: {}, isLoading: true });
        this.props.tweetGetRequest(this.state.page).then(
            (response) => {
                this.setState({ isLoading: false });
                if(!isEmpty(response.data.leaveRequests)) {
                    this.setState({ leaveRequests: response.data.leaveRequests, leaveRequestCount: response.data.leaveRequestCount });
                } else {
                    this.setState({ noLeaveRequests: true });
                }
            },
            (error) => {
                console.log(error.response.data);
                this.setState({ errors: error.response.data.errors, isLoading: false });
            }
        );
    }

    render() {
        const leaveRequests = this.state.leaveRequests.map((leaveRequest) => {
            return <TweetItem key={ leaveRequest.id } leaveRequest={ leaveRequest } />
        });
        const pleaseWaitMessage = <p>Please wait...</p>;
        const noTweetsMessage = <p>Strange. No requests yet. 
            {/* <Link to="/tweet">Tweet now</Link> */}
            </p>;
        return (
            <section>
                <h2>All leave requests</h2>
                { this.state.isLoading ? pleaseWaitMessage : leaveRequests }
                { this.state.noTweets ? noTweetsMessage : '' }
                <hr/>
                {/* <Pagination current={ this.state.page } count={ this.state.tweetCount }/> */}
            </section>
        );
    }
}

HomePage.propTypes = {
    tweetGetRequest: React.PropTypes.func.isRequired
};

export default connect((state) => { return {} }, { tweetGetRequest })(HomePage);