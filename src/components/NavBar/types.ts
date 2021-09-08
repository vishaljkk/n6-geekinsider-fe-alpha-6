import { SearchType } from "../../redux";
import { UserTypeTypes } from "../../routes";

export interface NavBarPropTypes { 
    history: any ,
    setIsAuth: (e: boolean) => void,
    setUserType: (e: UserTypeTypes) => void,
    setLoading: (e: boolean) => void,
    getJobDetails: (e: string) => void,
    setSearchType: (e: SearchType) => void,
    fetchCompanySearchData: (e: string) => void
}