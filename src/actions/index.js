import firebase from 'firebase'

export const login = ({email, password}) => {
    return dispatch => {
        dispatch({type: 'LOADING'})
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({type: 'LOGIN_SUCCESS', payload: user})
            })
            .catch(function(error) {
                dispatch({type: 'LOGIN_FAILURE', error: error.message})
          });
    }
}

export const register = ({email, password}) => {
    return dispatch => {
        dispatch({type: 'LOADING'})
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({type: 'REGISTER_SUCCESS', payload: user})
            })
            .catch(function(error) {
                dispatch({type: 'REGISTER_FAILURE', error: error.message})
          });
    }
}

export const createIdea = ({title, idea}) => {
    const { uid } = firebase.auth().currentUser
    
    return dispatch => {
        dispatch({type: 'CREATING_IDEA'})
        firebase.database().ref(`/userIdeas/${uid}/ideas`)
            .push({title, idea})
            .then(() => dispatch({type: 'NEW_IDEA'}))
    }
}

export const getIdeas = () => {
    const { uid } = firebase.auth().currentUser
    
    return dispatch => {
        dispatch({type: 'FETCH_IDEAS'})
        firebase.database().ref(`/userIdeas/${uid}/ideas`)
            .on('value', snapshot => {
                dispatch({type: 'GET_IDEAS', payload: snapshot.val()})
            })
    }
}

export const editIdea = ({title, idea, id}) => {
    const { uid } = firebase.auth().currentUser
    
    return dispatch => {
        firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
            .set({title, idea})
            .then(() => dispatch({type: 'IDEA_UPDATED'}))
    }
}

export const deleteIdea = ({id}) => {
    const { uid } = firebase.auth().currentUser
    
    return dispatch => {
        firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
            .remove()
            .then(() => dispatch({type: 'IDEA_DELETED'}))
    }
}

export const ideaInputChange = ({ field, value }) => {
    return {
        type: 'IDEA_INPUT_CHANGE',
        payload: { field, value }
    }
}