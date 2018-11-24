export const itemGetData = (id)=> {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to the database
        const firestore = getFirestore();
        const firebase  = getFirebase();
        firestore.collection('project').doc(id).get()
        .then((doc)=> {    
            dispatch({type: 'GET_ITEM_DATA', item: doc.data()})
        })
        .catch((err)=>{
            dispatch({type: 'GET_ITEM_DATA_ERR', err})
        })      
    }
}