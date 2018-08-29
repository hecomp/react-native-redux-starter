const INITIAL_STATE = {
    user: {},
    error: '',
    loading: false,
    title: '',
    idea: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NEW_IDEA':
            return { ...state, idea: action.payload, loading: false }
        case 'IDEA_INPUT_CHANGE': 
            return { ...state, [action.payload.field]: action.payload.value }
        case 'CREATING_IDEA': 
            return { ...state, loading: true, error: '' }
        case 'IDEA_UPDATED':
            return { ...state, }
        case 'IDEA_DeLETED':
            return { ...state, }
        default:
            return state
    }
}