import {PlaceholderPosition} from "../PlaceholderPosition";

const initialState = {
    filterText: '',
    selectedOption: null,
    placeholder: 'Select country',
    placeholderPosition: PlaceholderPosition.center,
    active: false,
    upward: false
};

export default function userState(state = initialState) {
    return state;
}