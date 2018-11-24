    import React from 'react';
    import {connect} from 'react-redux'
    import { firestoreConnect} from 'react-redux-firebase'
    import {compose } from 'redux'
    import {itemGetData} from '../redux/action/itemGetData'
    import { firebaseConnect, getVal } from 'react-redux-firebase'
    import {Redirect} from 'react-router-dom'
    import moment from 'moment'
    import {deleteProject} from '../redux/action/projectAction'

    const ProjectDetails = (props) => {
        const {auth} = props;
            if(!auth.uid){
                return <Redirect to='/signin'/>
            } 

        if (props.itemData) {
            const {title, content, author, createAt } = props.itemData;
            console.log(props, 'projectID');
            const projectID = props.match.params.id;
            const timeStamp = createAt? <p className="grey-text">{moment(createAt.toDate()).format('llll')}</p>:null;
            return (
                <div className='container section project-detail' >
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <div className="card-title">  {title}</div>
                            <p>{content}</p>
                        </div>
                        <div className="card-action grey-text gret lighten-4">
                            <div>Post by {author}</div>
                            {timeStamp}
                        </div>
                        <a className="waves-effect waves-light btn red" onClick= {()=>{props.deleteProject(projectID); props.history.push('/')}} >Delete Project</a>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container center">Loading Content ...</div>
            )
        }
      
    };
    const mapStateToProps = (state, ownProps) => {
        const id = ownProps.match.params.id;
        const projects = state.firestore.data.project;
        const project = projects? projects[id]: null;

        return {
            itemData: project,
            auth: state.firebase.auth
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            deleteProject: (projectID) => dispatch(deleteProject(projectID))
        }
    }
    export default compose(
        connect(mapStateToProps,mapDispatchToProps),
        firestoreConnect([
            {collection: 'project'}
        ])
    )(ProjectDetails);