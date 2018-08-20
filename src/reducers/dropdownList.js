const initialState = {
    selectedOption: null,
    active: false,
    upward: false
};

const dropdownList = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_OPTION':
            return {...state, selectedOption: action.payload};
        case 'SET_ACTIVE_TRUE':
            return {...state, active: true};
        case 'SET_ACTIVE_FALSE':
            return {...state, active: false};
        case 'SET_UPWARD_TRUE':
            return {...state, upward: true};
        case 'SET_UPWARD_FALSE':
            return {...state, upward: false};


        default:
            return state;
    }

};

export default dropdownList;
