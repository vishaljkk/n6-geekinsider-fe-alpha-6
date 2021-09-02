import { userTypeTypes } from "../routes/types";

export interface StateTypes {
    userType: userTypeTypes | '',
    isAuth: boolean,
    profileDetails: object,
    messages: object,
    landingData: object,
    searchData: [],
    loading: boolean
}

export interface actionTypes {
    type: string,
    payload: any
}