export const signIn = (credentials)=> {
    return (dispatch, getState, {getFirebase}) => {
        //async call to the database
        const firebase  = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err)=> {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=> {
            dispatch({type: "SIGN_OUT_SUCCESS"})
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((res)=> {
            console.log(res, 'user');
            firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials:  newUser.firstName[0]+newUser.lastName[0]
            })
            if(res){
                res.user.updateProfile({
                   displayName: `${newUser.firstName} ${newUser.lastName}`
                })
              }
        })
        .then(()=>{
            dispatch({type: 'SIGN_UP_SUCCESS'})
        })
        .catch((err)=> {
            dispatch({type: 'SIGN_UP_FAIL', err})
        })
    }
 }