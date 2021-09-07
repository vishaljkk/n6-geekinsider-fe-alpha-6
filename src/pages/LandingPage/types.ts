import { UserTypeTypes } from "../../routes";

export interface LandingPagePropTypes {
    userType: UserTypeTypes, 
    setUserType: (e: UserTypeTypes) => void 
}