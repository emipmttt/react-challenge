// Action Types
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE';

// Action Creators
export const setFirstName = (firstName) => ({
    type: SET_FIRST_NAME,
    payload: firstName,
});

export const setLastName = (lastName) => ({
    type: SET_LAST_NAME,
    payload: lastName,
});

// Thunk Action Creator
export const submitForm = (userData) => (dispatch) => {
    dispatch({ type: SUBMIT_FORM });

    // Simulate API call
    setTimeout(() => {
        if (userData.firstName && userData.lastName) {
            dispatch({ type: SUBMIT_FORM_SUCCESS });
            console.log('Form Submitted:', userData);
        } else {
            dispatch({ type: SUBMIT_FORM_FAILURE, error: 'Invalid data' });
        }
    }, 1000);
};
