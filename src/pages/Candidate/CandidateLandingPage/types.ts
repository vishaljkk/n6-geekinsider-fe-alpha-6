import { CandidateProfileDetailsTypes, JobObjectTypes } from "../../../redux";

export interface CandidateLandingPagePropTypes {
    handleProfileClick: () => void, 
    fetchProfileDetails: () => void, 
    profileDetails: CandidateProfileDetailsTypes
}

export interface TrendingJobsPropTypes {
    trendingJobs: JobObjectTypes[], 
    fetchTrendingJobs: () => void
}