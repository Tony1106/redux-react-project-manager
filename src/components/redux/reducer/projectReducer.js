const initState = {
    project: [
        {id: '1', title: 'hello world', content: 'this is the content for dummy data'},
        {id: '2', title: 'hello banana', content: 'this is the content for dummy data'},
        {id: '3', title: 'hello apple', content: 'this is the content for dummy data'},
        {id: '4', title: 'hello juice', content: 'this is the content for dummy data'},
    ],
    queryProject: {}
}
const projectReducer = (state = initState, action)=> {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project);
            action.project.id = '10';
            state.project.push(action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('error create', action.err);
            return state
        case 'GET_ITEM_DATA':
            console.log(action.item);
            const queryProject = action.item;
            return {
                ...state,
                queryProject 
            }
        case 'DELETE_PROJECT':
            console.log('delete project success');
            const projects = state.project;
            const newProject = projects.filter((project)=> {
                project.id != action.projectID
            })
            return {
                ...state,
                project: newProject
            }
        case 'DELETE_PROJECT_FAIL':
            console.log('delete project fail');
            return state;    
        default:
            return state;
            
    }

}

export default projectReducer;