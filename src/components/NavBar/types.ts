import { UserTypeTypes } from "../../routes/types";

export interface NavBarPropTypes { 
    history: any ,
    setIsAuth: (e: boolean) => void,
    userType?: UserTypeTypes,
    setUserType: (e: UserTypeTypes) => void
}