import { userTypeTypes } from '../routes/types';

export const setSignIn = (data: any) => {
    return (dispatch: any) => {
        dispatch({
            type:"LOGGEDIN",
            payload: data
        })
    }
}
export const setSignOut = () => {
    return (dispatch: any) => {
        dispatch({
            type:"LOGGEDOUT",
            payload: null
        })
    }
}

export const setUserType = (userType: userTypeTypes) => {
    return (dispatch: any) => {
        dispatch({
            type: 'SET_USER_TYPE',
            payload: userType
        })
    }
}