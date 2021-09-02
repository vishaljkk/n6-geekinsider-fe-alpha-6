import { userTypeTypes } from "../../routes/types";

export interface NavBarPropTypes { 
    history: any ,
    setIsAuth: (e: boolean) => void,
    userType?: any
    setUserType: (e: userTypeTypes) => void
}