import { notification } from 'antd';
import { CandidateSubmitTypes, RecruitereSubmitTypes } from '../pages/Onboarding/types';
import { UserTypeTypes } from '../routes/types';
import makeRequest from '../utils/makeRequest';
import { DispatchType } from './types';

export const setIsAuth = (data: boolean) => {
    return (dispatch: DispatchType) => {
        dispatch({
            type:"SET_AUTH",
            payload: data
        })
    }
}

export const setUserType = (userType: UserTypeTypes) => {
    return (dispatch: DispatchType) => {
        dispatch({
            type: 'SET_USER_TYPE',
            payload: userType
        })
    }
}

export const fetchProfileDetails = () => {
    return (dispatch: DispatchType) => {
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
    return (dispatch: DispatchType) => {
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
    return (dispatch: DispatchType) => {
        // makeRequest.post()
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
        // dispatch({
        //     type: 'SET_LANDING_DATA',
        //     payload: data
        // })
    }
}

export const fetchLandingPageData = () => {
    return (dispatch: DispatchType) => {
        // makeRequest.post()
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
        // dispatch({
        //     type: 'SET_LANDING_DATA',
        //     payload: data
        // })
    }
}

export const getLandingPageData = () => {
    return (dispatch: DispatchType) => {
        // makeRequest.post()
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
        // dispatch({
        //     type: 'SET_LANDING_DATA',
        //     payload: data
        // })
    }
}

export const saveCandidateData = (values: CandidateSubmitTypes, history: any) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true })
        makeRequest.post('/api/users/user', values)
            .then(data => {
                dispatch({ type: 'SET_PROFILE_DETAIL', payload: values })
                history.push('/home');
                dispatch({ type: 'SET_LOADING', payload: false })
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false })
                console.error('Error:', error);
            });
    }
}

export const saveRecruiterData = (values: RecruitereSubmitTypes, history: any) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true })
        makeRequest.post('/api/users/user', values)
            .then(data => {
                dispatch({ type: 'SET_PROFILE_DETAIL', payload: values })
                history.push('/home');
                dispatch({ type: 'SET_LOADING', payload: false })
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false })
                console.error('Error:', error);
            });
    }
}

export const createJobPost = (values: RecruitereSubmitTypes, history: any) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true })
        makeRequest.post('/api/jobs/job', values)
            .then(data => {
                dispatch({ type: 'ADD_JOB_POST', payload: values })
                notification.success({
                    message: 'Job posted successfully',
                    description: 'Please visit the recent jobs posted section to get updates!'
                })
                history.push('/home');
                dispatch({ type: 'SET_LOADING', payload: false })
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false })
                console.error('Error:', error);
            });
    }
}

export const setLoading = (value: boolean) => {
    return (dispatch: DispatchType) => {
        dispatch({
            type: 'SET_LOADING',
            payload: value
        })
    }
}