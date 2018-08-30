const INITIAL_STATE = {
    user: {},
    error: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload, loading: false }
        case 'LOGIN_FAILURE': 
            return { ...state, error: action.error, loading: false }
        case 'REGISTER_SUCCESS':
            return { ...state, user: action.payload, loading: false }
        case 'REGISTER_FAILURE':
            return { ...state, error: action.error, loading: false }
        case 'LOADING': 
            return { ...state, loading: true, error: '' }
        default:
            return state
    }
}