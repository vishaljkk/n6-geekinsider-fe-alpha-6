import { SearchType } from "../../redux";
import { UserTypeTypes } from "../../routes";

export interface NavBarPropTypes { 
    userType: UserTypeTypes,
    history: any ,
    setIsAuth: (e: boolean) => void,
    setUserType: (e: UserTypeTypes) => void,
    setLoading: (e: boolean) => void,
    getJobDetails: (e: string) => void,
    setSearchType: (e: SearchType) => void,
    fetchCompanySearchData: (e: string) => void,
    cities: string[],
    skills: string[],
    fetchCities: () => void,
    fetchSkills: () => void,
    clearStates: () => void
}

export interface RecruiterSkillSearchPropTypes {
    userType: UserTypeTypes, 
    fetchSkillSearch: (e: string[]) => void,
    setSearchType: (e: SearchType) => void,
    fetchRecruiterSkillSearch: (e: string[]) => void,
    skills: string[]
}