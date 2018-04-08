// Client / Components / Pages / Tweet Item

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class TweetItem extends React.Component {
    render() {
        const  { id, reason, username, name, createdAt, parentMobile, fromDate, toDate  } = this.props.leaveRequest;
        console.log(reason)
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    &bull; <strong style={{fontSize:17}}>{ name }</strong> : { reason }<br />
                    &bull; Parent Mobile : {parentMobile}<br />
                    &bull; Duration : {fromDate.replace('T',' (').split('.')[0]}) - {toDate.replace('T', ' (').split('.')[0]})<br />
                </div>
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

TweetItem.propTypes = {
    tweet: React.PropTypes.object.isRequired
};

export default TweetItem;