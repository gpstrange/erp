// Client / Components / Pages / Tweet Item

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class EventItem extends React.Component {
    render() {
        const { description, createdUserType, name, createdAt, fromDate, toDate } = this.props.event;
        console.log(description)
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <strong style={{ fontSize: 18 }}>{name}</strong>}<br />
                    &bull; Event description : {description}<br />
                    &bull; Duration : {fromDate.replace('T', ' (').split('.')[0]}) - {toDate.replace('T', ' (').split('.')[0]})<br />
                </div>
                <div className="panel-footer">
                    {
                        (createdUserType) ? <span><Link to={`/home`}>{createdUserType}</Link> &bull; </span> : ''
                    }
                    {moment(createdAt).fromNow()}
                </div>
            </div>
        );
    }
}

export default EventItem;