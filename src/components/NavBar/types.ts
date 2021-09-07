import { UserTypeTypes } from "../../routes";

export interface NavBarPropTypes { 
    history: any ,
    setIsAuth: (e: boolean) => void,
    setUserType: (e: UserTypeTypes) => void,
    setLoading: (e: boolean) => void,
    getJobDetails: (e: string) => void
}