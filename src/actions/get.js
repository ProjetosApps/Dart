import { ReposRest } from '../services'

export const _getRepos = () => {

    return dispatch => {

        dispatch({ type: 'REPOS_LOADING',  payload: '' });
        
        ReposRest.getRepos()
        
        .then(res => dispatch({ type: 'REPOS_CHANGE_FIELD',  payload: { value: res, field: 'repositories' } }) )
        
        .catch(err => dispatch({ type: 'REPOS_ERROR',  payload: {value: err, field: 'msg_erro'} }) );
    
    }
}


