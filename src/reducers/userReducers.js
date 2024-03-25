import { SET_FIRST_NAME, SET_LAST_NAME, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILURE } from '../actions/userActions';

const initialState = {
    firstName: 'Breaking',
    lastName: 'Bad',
    formSubmitted: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case SET_LAST_NAME:
            return { ...state, lastName: action.payload };
        case SUBMIT_FORM_SUCCESS:
            return { ...state, formSubmitted: true };
        case SUBMIT_FORM_FAILURE:
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default userReducer;
