import { UserTypeTypes } from "../routes";

export interface StateTypes {
    userType: UserTypeTypes | '',
    isAuth: boolean,
    profileDetails: ProfileDetailsTypes | {},
    messages: object,
    landingData: object,
    searchData: any,
    loading: boolean,
    recentJobs: any,
    skillSearch: any,
    trendingJobs: any,
    recommendedJobs: any,
    activeJob: any,
    jobDetailModalVisible: boolean,
    recommendedCandidates: any,
    recruiterCandidateDetails: any
}

export interface actionTypes {
    type: string,
    payload: any
}

export type DispatchType = (e: actionTypes) => void;

export interface ProfileDetailsTypes {
    about?: string,
    empSize?: number,
    location?: string,
    name?: string,
    site?: string,
    skills?: string[],
    whatsappNumber?: string
}