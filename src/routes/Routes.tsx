import { Suspense, lazy, useEffect, createContext, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { setIsAuth, setUserType } from '../redux/actions';
import { AppTypes } from './types';
import { isAuthenticated } from '../utils';
import Loader from '../components/Loader';
import { StateTypes } from '../redux/types';

const Signup = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const NavBar = lazy(() => import('../components/NavBar'));
const SearchResult = lazy(() => import('../pages/SearchAndFilters'));
const Messages = lazy(() => import('../pages/Messages'));
const CandidateProfile = lazy(() => import('../pages/Profile'));
const RecruiterProfile = lazy(() => import('../pages/RecruiterProfile'));
const JobPostingForm = lazy(() => import('../pages/JobPostingForm'));
const CandidateOnboarding = lazy(() => import('../pages/Onboarding/CandidateOnboarding'));
const RecruiterOnboarding = lazy(() => import('../pages/Onboarding/RecruiterOnboarding'));

const pages = [
    {
        pageLink: '/home',
        view: LandingPage,
        displayName: 'Landing',
        showInNavbar: true,
    },
    {
        pageLink: '/messages',
        view: Messages,
        displayName: 'Messages',
        showInNavbar: true,
    },
    {
        pageLink: '/recruiter/postjob',
        view: JobPostingForm,
        displayName: 'Job Posting Form',
        showInNavbar: true,
    },
    {
        pageLink: '/candidate/onboarding',
        view: CandidateOnboarding,
        displayName: 'Candidate Onboarding',
        showInNavbar: true,
    },
    {
        pageLink: '/recruiter/onboarding',
        view: RecruiterOnboarding,
        displayName: 'Recruiter Onboarding',
        showInNavbar: false,
    },
    {
        pageLink: '/search',
        view: SearchResult,
        displayName: 'Search Result',
        showInNavbar: false,
    },
    {
        pageLink: '/login',
        view: Login,
        displayName: 'Login',
        showInNavbar: true,
    },
    {
        pageLink: '/signup',
        view: Signup,
        displayName: 'Signup',
        showInNavbar: true,
    },
    {
        pageLink: '/candidate/profile',
        view: CandidateProfile,
        displayName: 'Candidate Profile',
        showInNavbar: true,
    },
    {
        pageLink: '/recruiter/profile',
        view: RecruiterProfile,
        displayName: 'Recruiter profile',
        showInNavbar: true,
    }
];

// export const HistoryContext = createContext({});

const Routes: React.FC<AppTypes> = (props) => {

    const { isAuth, userType, location, setIsAuth, loading } = props;
    const invalidLocations = ['', '/', '/login', '/signup'];
    const history = useHistory();

    // useEffect(() => {
    //     setAuthListener();
    // }, [])
    
    useEffect(() => {
        isAuthenticated().then(resp => {
            if (resp?.result) {
                setIsAuth(true);
                const type = resp.signInUserSession.accessToken.payload['cognito:groups'][0] === 'userRecruiter' ? 'recruiter' : 'candidate';
                setUserType(type);
                // redirecting to home is these invalid urls will be requested
                if (location?.pathname && invalidLocations.includes(location.pathname)) {
                    history.push('/home')
                }
            }
            else {
                // redirecting to login when user is not authenticated
                setIsAuth(false);
                setUserType('');
                history.push('/login');
            }
        })
    }, [])

    // function setAuthListener() {
    //     Hub.listen("auth", (data) => {
    //         switch (data.payload.event) {
    //             case "signOut":
    //                 setIsAuth(false);
    //                 break;
    //             case "signIn":
    //                 setIsAuth(true);
    //                 break;
    //         }
    //     });
    // };

    return (
        <>
            {loading && <div className="loader--global">
                <Loader />
            </div>}
            <>
                {isAuth && <Suspense fallback={<div/>}>
                    <NavBar history={history} setIsAuth={setIsAuth}/>
                </Suspense>}
                <Switch>
                    {pages.map((page, index) => {
                        return (
                            <Route
                                exact
                                path={page.pageLink}
                                render={(props: any) => <page.view {...{...props}} setIsAuth={setIsAuth} isAuth={isAuth}/>}
                                key={index}
                            />
                        );
                    })}
                    <Redirect to="/" />
                </Switch>
            </>
        </>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType,
    isAuth: state.isAuth,
    loading: state.loading
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setIsAuth, 
    setUserType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);