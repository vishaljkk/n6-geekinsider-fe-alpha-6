import { ProfileDetailsTypes } from "../../../redux";

export interface RecruiterLandingPropTypes {
    fetchProfileDetails: () => void, 
    handleProfileClick: () => void, 
    profileDetails: ProfileDetailsTypes
}

export interface RecentJobType {
    companyName: string,
    jobDescription: string,
    jobTitle: string,
    skills: string[]
}

export interface RecommCandidateWidgetPropTypes {
    recentJobs: RecentJobType[], 
    fetchPostedJobs: () => void, 
}

export interface SingleWidgetTypes {
    aboutid: string,
    ctc: string,
    exp: string,
    githubUrl: string,
    jobTitle: string,
    location: string,
    name: string,
    skills: string[],
    whatsappNumber: string,
    __v: number,
    _id: string,
    handleClick: (e: SingleWidgetTypes) => void
}

export interface RecommenededCandidatesWidgetTypes {
    recommendedCandidates: SingleWidgetTypes[], 
    fetchRecommendedCandidates: () => void,
    setRecruiterCandidateDetails: (e: any) => void
}