import React from 'react';
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'


const ProjectList = ({projectList=[]}) => {
    let projectSummary = projectList.map((item, i)=> {
        console.log(item.id, 'item id');
        
        return (
        <Link to={'/project/'+ item.id} >
            <ProjectSummary key={i} id={item.id} projectID = {item.id} item ={item} />
        </Link>
        )
    })
    return (
        <div className='project-list section' >
            <div className="card z-depth-0 project-summary">
                {projectSummary}
            </div>
        </div>
    );
};


export default ProjectList;