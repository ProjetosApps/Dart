const INITIAL_STATE = {
    change: 0,
    loading: false,
    repositories: [],
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'REPOS_LOADING':
            return { ...state, loading: true, change: state.change++ };

        case 'REPOS_ERROR':
            return { ...state, loading: false, change: state.change++};

        case 'REPOS_CHANGE_FIELD':
            let REPOS_CHANGE_FIELD = { ...state };
            REPOS_CHANGE_FIELD[action.payload.field] = action.payload.value;
            REPOS_CHANGE_FIELD.loading = false;
            REPOS_CHANGE_FIELD.change++;
            return REPOS_CHANGE_FIELD;

        case 'RESET_REPOS': 
            return INITIAL_STATE;

        default:
            return state;
    }
}
