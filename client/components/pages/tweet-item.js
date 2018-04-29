// Client / Components / Pages / Tweet Item

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { connect } from 'react-redux';
import {acceptLeaveRequest, rejectLeaveRequest} from '../../actions/pages/tweet';
import axios from 'axios';
import { flashMessageAdd, flashMessageDelete } from '../../actions/flash-messages';

class LeaveItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            accepted: false,
            rejected: false,
            errors: {}
        };
    }
    acceptLeave(id) {
        console.log(id)
        if(id){ 
            var data = {id}
            this.setState({errors: {}, isLoading: true});
            axios.post('/api/staff/leaveAccept', data).then(
                (response) => {
                    console.log(111111111111111111)
                    this.props.flashMessageAdd({
                        type: 'success',
                        text: 'Leave request accepted!'
                    });
                    console.log(response)
                    setTimeout(() => this.props.flashMessageDelete(), 3000)
                    this.setState({isLoading: false, accepted:true});
                },
                (error) => {
                    console.log(11111111111111111111111)
                    console.log(error.response.data);
                    this.setState({errors: error.response.data.errors, isLoading: false});
                }
            )
        }
    }
    rejectLeave(id) {
        console.log(id)
        if(id){
            this.setState({errors: {}, isLoading: true});
            axios.post('/api/staff/leaveReject', id).then(
                (response) => {
                    this.props.flashMessageAdd({
                        type: 'success',
                        text: 'Leave request rejected!'
                    });
                    setTimeout(() => this.props.flashMessageDelete(), 3000)
                    this.setState({isLoading: false, rejected:true});
                },
                (error) => {
                    console.log(11111111111111111111111)
                    console.log(error.response.data);
                    this.setState({errors: error.response.data.errors, isLoading: false});
                }
            )
        }
    }
    render() {
        const  { id, reason, username, name, createdAt, parentMobile, fromDate, toDate, accepted, rejected  } = this.props.leaveRequest;
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    &bull; <strong style={{fontSize:17}}>{ name }</strong> : { reason }<br />
                    &bull; Parent Mobile : {parentMobile}<br />
                    &bull; Duration : {fromDate.replace('T',' (').split('.')[0]}) - {toDate.replace('T', ' (').split('.')[0]})<br />
                </div>
                { accepted || rejected ? 
                ( 
                    <button type="button" className={accepted ? 'btn btn-success' : 'btn btn-danger'}>{accepted ? 'Accepted' : 'Rejected'}</button>
                ) : 
                (   
                <div>
                    <button type="button" className="btn btn-success" onClick={()=>this.acceptLeave(id)}>Accept</button>
                    <button type="button" className="btn btn-danger" onClick={()=>this.rejectLeave(id)}>Reject</button>
                </div>
                )
                }
                <div className="panel-footer">
                    {
                        (username) ? <span><Link to={`/profile/${ username }`}>{ username }</Link> &bull; </span> : ''
                    }
                    { moment(createdAt).fromNow() }
                </div>
            </div>
        );
    }
}

LeaveItem.propTypes = {
    tweet: React.PropTypes.object,
    flashMessageAdd: React.PropTypes.func,
    flashMessageDelete: React.PropTypes.func,
};


export default connect((state) => { return {} }, { flashMessageAdd, flashMessageDelete })(LeaveItem);