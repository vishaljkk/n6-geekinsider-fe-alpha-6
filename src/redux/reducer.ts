import { StateTypes, actionTypes } from './types';

const initialState: StateTypes = {
    userType: '',
    isAuth: false,
    profileDetails: {},
    loading: false,
    recentJobs: [],
    skillSearch: [],
    trendingJobs: [],
    recommendedJobs: [],
    activeJob: {},
    jobDetailModalVisible: false,
    recommendedCandidates: [],
    recruiterCandidateDetails: {},
    searchType: 'recommended',
    companySearch: [],
    appliedCandidates: [],
    skills: [],
    cities: []
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
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'ADD_JOB_POST':
            return { ...state, recentJobs: [ action.payload, ...state.recentJobs ] };
        case 'SET_POSTED_JOBS':
            return { ...state, recentJobs: action.payload };
        case 'SET_SKILL_SEARCH_RESULT':
            return { ...state, skillSearch: action.payload };
        case 'SET_TRENDING_JOBS':
            return { ...state, trendingJobs: action.payload };
        case 'SET_RECOMMENDED_JOBS':
            return { ...state, recommendedJobs: action.payload };
        case 'SET_ACTIVE_JOB':
            return { ...state, activeJob: action.payload };
        case 'SET_ACTIVE_JOB_MODAL_VISIBLE':
            return { ...state, jobDetailModalVisible: action.payload };
        case 'SET_RECOMMENDED_CANDIDATES':
            return { ...state, recommendedCandidates: action.payload };
        case 'SET_RECRUITER_CANDIDATE_DETAILS':
            return { ...state, recruiterCandidateDetails: action.payload };
        case 'SET_SEARCH_TYPE':
            return { ...state, searchType: action.payload };
        case 'SET_COMPANY_SEARCH':
            return { ...state, companySearch: action.payload };
        case 'SET_APPLIED_CANDIDATES':
            return { ...state, appliedCandidates: action.payload };
        case 'SET_CITIES':
            return { ...state, cities: action.payload };
        case 'SET_SKILLS':
            return { ...state, skills: action.payload };
        case 'CLEAR_STATE':
            return { ...initialState };
        default:
            return { ...state };
    }
}

export default rootReducer;