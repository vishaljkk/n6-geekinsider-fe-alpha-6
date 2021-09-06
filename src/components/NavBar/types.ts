import { UserTypeTypes } from "../../routes/types";

export interface NavBarPropTypes { 
    history: any ,
    setIsAuth: (e: boolean) => void,
    setUserType: (e: UserTypeTypes) => void,
    setLoading: (e: boolean) => void,
    getJobDetails: (e: string) => void
}