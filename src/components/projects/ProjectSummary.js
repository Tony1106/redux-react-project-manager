import React from 'react';
import ProjectDetails from './ProjectDetails';
import moment from 'moment'
const ProjectSummary = (props) => {
    console.log(props, 'hello');
    const {author, title, content, createAt} = props.item;
    const timeStamp = createAt? <p className="grey-text">{moment(createAt.toDate()).format('llll')}</p>:null;
    
    return (
            <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        {title}
                    </span>
                    <p>{content}</p>
                    <p>Create by: {author} </p>
                    {timeStamp}
                </div>
    );
};

export default ProjectSummary;