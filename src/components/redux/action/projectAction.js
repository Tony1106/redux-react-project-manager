export const createProject = (project)=> {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to the database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorUID = getState().firebase.auth.uid;
        console.log(profile, 'profile');
        
        firestore.collection('project').add({
            ...project,
            author: profile.firstName + profile.lastName,
            authorID: authorUID,
            createAt: new Date()
        })
        .then(()=> dispatch({type: 'CREATE_PROJECT', project}))
        .catch((err)=> {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
}

export const deleteProject = (projectID) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        console.log(projectID, 'project ID');
        
        const firestore = getFirestore();
        firestore.collection('project').doc(projectID).delete().then(()=> {
            console.log('delete success');  
            dispatch({type: 'DELETE_PROJECT', projectID})
        })
        .catch((err)=> {
            console.log('delete project error',err);
            dispatch({type: 'DELETE_PROJECT_FAIL'})
        })
    }
}