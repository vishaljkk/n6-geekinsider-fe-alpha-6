import { JobObjectTypes, SearchType } from "../../../redux";

export interface SearchPropTypes {
    skillSearch: JobObjectTypes[], 
    searchType: SearchType, 
    trendingJobs: JobObjectTypes[], 
    recommendedJobs: JobObjectTypes[], 
    companySearch: JobObjectTypes[], 
    setSearchType: (e: SearchType) => void, 
    fetchRecommendedJobs: () => void, 
    fetchTrendingJobs: () => void
}

export interface SearchResultsTypes {
    data: JobObjectTypes[]
}