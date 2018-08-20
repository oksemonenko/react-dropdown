const setFilterText = (text) => dispatch => {
    dispatch({
        type: 'SET_FILTER_TEXT',
        payload: text
    });
    return Promise.resolve();
};

const setPlaceholder = (placeholder) => dispatch => {
    dispatch({
        type: 'SET_PLACEHOLDER',
        payload: placeholder
    });
    return Promise.resolve();
};

const setPlaceholderPosition = (placeholderPosition) => dispatch => {
    dispatch({
        type: 'SET_PLACEHOLDER_POSITION',
        payload: placeholderPosition
    });
    return Promise.resolve();
};

export {
    setFilterText,
    setPlaceholder,
    setPlaceholderPosition
}