import { StateTypes, actionTypes } from './types';

const initialState: StateTypes = {
    userType: '',
    isAuth: false,
    profileDetails: {},
    messages: {},
    landingData: {},
    searchData: [],
    loading: false
};

const rootReducer = (state: StateTypes = initialState, action: actionTypes) => {
    switch(action.type) {
        case 'SET_AUTH':
            return { ...state, isAuth: action.payload };
        case 'SET_USER_TYPE':
            return { ...state, userType: action.payload };
        case 'SET_PROFILE_DETAIL':
            return { ...state, profileDetails: action.payload };
        case 'SET_MESSAGES':
            return { ...state, messages: action.payload };
        case 'SET_LANDING_DATA':
            return { ...state, landingData: action.payload };
        case 'SET_SEARCH_DATA':
            return { ...state, searchData: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return { ...state };
    }
}

export default rootReducer;