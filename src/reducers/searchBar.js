import {PlaceholderPosition} from "../PlaceholderPosition";

const initialState = {
    filterText: '',
    placeholder: 'Select country',
    placeholderPosition: PlaceholderPosition.center
};

const searchBar = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {...state, filterText: action.payload};
        case 'SET_PLACEHOLDER':
            return {...state, placeholder: action.payload};
        case 'SET_PLACEHOLDER_POSITION':
            return {...state, placeholderPosition: action.payload};

        default:
            return state;
    }

};

export default searchBar;
