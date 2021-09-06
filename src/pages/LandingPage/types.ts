import { UserTypeTypes } from "../../routes/types";

export interface LandingPagePropTypes {
    userType: UserTypeTypes, 
    setUserType: (e: UserTypeTypes) => void 
}