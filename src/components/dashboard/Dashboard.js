import React, { Component } from 'react';
import {connect} from 'react-redux'
import Notifications from './Notifications'
import ProjecList from '../projects/ProjectList'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
class Dashboard extends Component {
    render() {
       
        
        const {project, auth, noftification} = this.props;
        console.log(this.props, 'props dashboard');
        
        if(!auth.uid){
            return <Redirect to='/signin'/>
        } 
        return (
            <div className='container dashboard' >
                <div className="row">
                    <div className="col s12 m6 ">
                        <ProjecList projectList={project }/>
                    </div>
                    <div className="col s12 m5 ofset-m1">
                        <Notifications noftification = {noftification}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    console.log(state.firestore, 'firestore');
    
    return {
        project: state.firestore.ordered.project,
        noftification: state.firestore.ordered.noftifications,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'project', orderBy: ['createAt', 'desc']},
        {collection: 'noftifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);