const setSelectedOption = (option) => dispatch => {
    dispatch({
        type: 'SET_SELECTED_OPTION',
        payload: option
    });
    return Promise.resolve();
};

const setActiveTrue = () => dispatch => {
    dispatch({
        type: 'SET_ACTIVE_TRUE'
    });
    return Promise.resolve();
};

const setActiveFalse = () => dispatch => {
    dispatch({
        type: 'SET_ACTIVE_FALSE'
    });
    return Promise.resolve();
};

const setUpwardTrue = () => dispatch => {
    dispatch({
        type: 'SET_UPWARD_TRUE'
    });
    return Promise.resolve();
};

const setUpwardFalse = () => dispatch => {
    dispatch({
        type: 'SET_UPWARD_FALSE'
    });
    return Promise.resolve();
};

export {
    setSelectedOption,
    setActiveTrue,
    setActiveFalse,
    setUpwardTrue,
    setUpwardFalse
}
