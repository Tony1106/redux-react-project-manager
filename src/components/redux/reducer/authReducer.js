const initState = {
    authError: null,
    userDetail: {}
}
const authReducer = (state = initState, action)=> {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state, 
                authError: 'Login fail'
            }
        case 'LOGIN_SUCCESS': 
            console.log('Login success');
            
            return {
                ...state,
                authError: null
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('sign out success');
            return state
        case 'SIGN_UP_SUCCESS':
            console.log('sign up success');
            return {
                ...state,
                authError: null
            }
        case 'SIGN_UP_FAIL':
            console.log('sign up fail', action.err);
            return {
                ...state, 
                authError: action.err.message
            }
        default:
            return state
    }
    
}

export default authReducer;