import { notification } from 'antd';
import { CandidateSubmitTypes, RecruitereSubmitTypes } from '../pages/Onboarding/types';
import { UserTypeTypes } from '../routes';
import makeRequest from '../utils/makeRequest';
import { DispatchType } from './types';
import { SearchType } from '.';

export const setIsAuth = (data: boolean) => {
    return (dispatch: DispatchType) => {
        dispatch({
            type:"SET_AUTH",
            payload: data
        })
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

export const setUserType = (userType: UserTypeTypes) => {
    return (dispatch: DispatchType) => {
        dispatch({
            type: 'SET_USER_TYPE',
            payload: userType
        })
    }
}

export const setActiveJobModalVisible = (data: boolean) => {
    return (dispatch: DispatchType) => {
        dispatch({
            type:"SET_ACTIVE_JOB_MODAL_VISIBLE",
            payload: data
        })
    }
}

export const fetchProfileDetails = () => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true })
        makeRequest.get('/api/users/user')
            .then(data => {
                dispatch({
                    type: 'SET_PROFILE_DETAIL',
                    payload: data.user
                })
                dispatch({ type: 'SET_LOADING', payload: false })
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false })
            });
    }
}

export const fetchMessages = (section: string, id: string) => {
    return (dispatch: DispatchType) => {
        makeRequest.get('/api/message')
            .then(resp => {
                // dispatch({
                //     type: 'SET_MESSAGES',
                //     // payload: userType
                // })
            })
            .catch(err => {
            })
    }
}

export const saveCandidateData = (values: CandidateSubmitTypes, callback: any) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true })
        makeRequest.post('/api/users/user', values)
            .then(data => {
                dispatch({ type: 'SET_PROFILE_DETAIL', payload: values })
                callback();
                dispatch({ type: 'SET_LOADING', payload: false })
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false })
            });
    }
}

export const saveRecruiterData = (values: RecruitereSubmitTypes, callback: any) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true })
        makeRequest.post('/api/users/user', values)
            .then(data => {
                dispatch({ type: 'SET_PROFILE_DETAIL', payload: values })
                callback();
                dispatch({ type: 'SET_LOADING', payload: false })
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false })
            });
    }
}

export const createJobPost = (values: RecruitereSubmitTypes, callback: any) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.post('/api/jobs/job', values)
            .then(data => {
                dispatch({ type: 'ADD_JOB_POST', payload: values })
                notification.success({
                    message: 'Job posted successfully',
                    description: 'Please visit the recent jobs posted section to get updates!'
                })
                callback();
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }
}

export const fetchPostedJobs = () => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true })
        makeRequest.get('/api/jobs/job')
            .then(data => {
                dispatch({ type: 'SET_POSTED_JOBS', payload: data.jobRecord });
                dispatch({ type: 'SET_LOADING', payload: false })
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false })
            });
    }
}

export const fetchSkillSearch = (skills: string[]) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.get(`/api/jobs/job?skills=${skills.join(',')}`)
            .then(data => {
                dispatch({ type: 'SET_SKILL_SEARCH_RESULT', payload: data.jobRecord });
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }
}

export const applyForJob = (id: string) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.post(`/api/users/apply?jobid=${id}`, {})
            .then(data => {
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }
}

export const getJobDetails = (cname: string) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.get(`/api/jobs/job?cname=${cname}`)
            .then(data => {
                dispatch({ type: 'SET_SKILL_SEARCH_RESULT', payload: data.jobRecord });
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }
}

export const fetchTrendingJobs = () => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.get(`/api/jobs/trend`)
            .then(data => {
                dispatch({ type: 'SET_TRENDING_JOBS', payload: data.jobRecord });
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }
}

export const fetchRecommendedJobs = () => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.get(`/api/jobs/reco`)
            .then(data => {
                dispatch({ type: 'SET_RECOMMENDED_JOBS', payload: data.jobRecord });
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }
}

export const fetchJobDetail = (id: string) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.get(`/api/jobs/jobdetail?jobid=${id}`)
            .then(data => {
                dispatch({ type: 'SET_ACTIVE_JOB', payload: data.jobRecord });
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
        }
}

export const fetchRecommendedCandidates = () => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.get(`/api/users/getcans`)
            .then(data => {
                dispatch({ type: 'SET_RECOMMENDED_CANDIDATES', payload: data.user });
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }
}

export const setRecruiterCandidateDetails = (values: any) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_RECRUITER_CANDIDATE_DETAILS', payload: values });
    }
}

export const setSearchType = (searchType: SearchType) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_SEARCH_TYPE', payload: searchType });
    }
}

export const fetchCompanySearchData = (cname: string) => {
    return (dispatch: DispatchType) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        makeRequest.get(`/api/jobs/job?cname=${cname}`)
            .then(data => {
                dispatch({ type: 'SET_COMPANY_SEARCH', payload: data.jobRecord });
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch((error) => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }
}