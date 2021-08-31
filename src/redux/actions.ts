import { userTypeTypes } from '../routes/types';
import makeRequest from '../utils/makeRequest';

export const setIsAuth = (data: boolean) => {
    return (dispatch: any) => {
        dispatch({
            type:"SET_AUTH",
            payload: data
        })
    }
}
// export const setSignOut = () => {
//     return (dispatch: any) => {
//         dispatch({
//             type:"LOGGEDOUT",
//             payload: null
//         })
//     }
// }

export const setUserType = (userType: userTypeTypes) => {
    return (dispatch: any) => {
        dispatch({
            type: 'SET_USER_TYPE',
            payload: userType
        })
    }
}

export const getProfileDetails = (id: string) => {
    return (dispatch: any) => {
        // makeRequest.post({ id })
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
        dispatch({
            type: 'SET_PROFILE_DETAIL',
            // payload: userType
        })
    }
}

export const getMessages = (section: string, id: string) => {
    return (dispatch: any) => {
        // makeRequest.post()
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
        dispatch({
            type: 'SET_MESSAGES',
            // payload: userType
        })
    }
}

export const getJobDetails = (section: string, id: string) => {
    return (dispatch: any) => {
        // makeRequest.post()
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
        dispatch({
            type: 'SET_LANDING_DATA',
            // payload: data
        })
    }
}

export const fetchLandingPageData = () => {
    return (dispatch: any) => {
        // makeRequest.post()
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
        dispatch({
            type: 'SET_LANDING_DATA',
            // payload: data
        })
    }
}

export const getLandingPageData = () => {
    return (dispatch: any) => {
        // makeRequest.post()
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
        dispatch({
            type: 'SET_LANDING_DATA',
            // payload: data
        })
    }
}