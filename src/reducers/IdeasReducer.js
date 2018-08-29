const INITIAL_STATE = {
    loading: false,
    ideaList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_IDEAS':
            return { ...state, ideaList: action.payload, loading: false }
        case 'FETCH_IDEAS': 
            return { ...state, loading: true }
        default:
            return state
    }
}