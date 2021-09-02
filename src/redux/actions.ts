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

export const fetchProfileDetails = () => {
    return (dispatch: any) => {
        makeRequest.get('/api/users/user')
            .then(data => {
                dispatch({
                    type: 'SET_PROFILE_DETAIL',
                    payload: data.user
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const fetchMessages = (section: string, id: string) => {
    return (dispatch: any) => {
        makeRequest.get('/api/message')
            .then(resp => {
                console.log(resp)
                // dispatch({
                //     type: 'SET_MESSAGES',
                //     // payload: userType
                // })
            })
            .catch(err => {
                console.error(err)
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

interface RecruiterOnBoardingDataTypes {
    name: string,
    preferredIndustry: string,
    location: string,

}

export const saveRecruiterData = (values: RecruiterOnBoardingDataTypes) => {
    return (dispatch: any) => {
        makeRequest.post('/api/users/user', values)
            .then(data => {
                console.log('Success:', data);
                // dispatch({
                //     type: 'SET_LANDING_DATA',
                //     // payload: data
                // })
                // history.push('/home');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export const setLoading = (value: boolean) => {
    return (dispatch: (e: { type: string, payload: any }) => void) => {
        dispatch({
            type: 'SET_LOADING',
            payload: value
        })
    }
}