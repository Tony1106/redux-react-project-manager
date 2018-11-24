import React from 'react';
import moment from 'moment'
const Notifications = (props) => {
    const {noftification} =  props;
    console.log(props,noftification, 'nofti');
    
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">
                        Noftification
                    </div>
                    <ul>
                        {noftification && noftification.map((item)=> {
                            return (
                                <li key={item.id}>
                                    <span className="red-text">{item.user} </span>
                                    <span>{item.content}</span>
                                    <span> {moment(item.time.toDate()).fromNow()} </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notifications;