import { Suspense, lazy, useEffect, createContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { setIsAuth, setUserType } from '../redux/actions';
import { AppTypes } from './types';
import { isAuthenticated } from '../utils';
import { Hub } from 'aws-amplify';

const Signup = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const NavBar = lazy(() => import('../components/NavBar'));
const SearchResult = lazy(() => import('../pages/SearchAndFilters'));
const Messages = lazy(() => import('../pages/Messages'));
const Profile = lazy(() => import('../pages/Profile'));
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
        pageLink: '/profile',
        view: Profile,
        displayName: 'Profile',
        showInNavbar: true,
    }
];

export const HistoryContext = createContext({});

const Routes: React.FC<AppTypes> = (props) => {

    const { history, location } = props;
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const invalidLocations = ['', '/', '/login', '/signup'];

    useEffect(() => {
        setAuthListener();
    }, [])
    
    useEffect(() => {
        isAuthenticated().then(resp => {
            if (resp) {
                setIsAuth(true);
                // redirecting to home is these invalid urls will be requested
                if (location?.pathname && invalidLocations.includes(location.pathname)) {
                    history.push('/home')
                }
            }
            else {
                // redirecting to login when user is not authenticated
                history.push('/login');
            }
        })
    }, [isAuth])

    function setAuthListener() {
        Hub.listen("auth", (data) => {
            switch (data.payload.event) {
                case "signOut":
                    setIsAuth(false);
                    break;
                case "signIn":
                    setIsAuth(true);
                    break;
            }
        });
    };

    return (
        <HistoryContext.Provider value={history}>
            {isAuth && <Suspense fallback={<div/>}>
                <NavBar history={history}/>
            </Suspense>}
            <Switch>
                {pages.map((page, index) => {
                    return (
                        <Route
                            exact
                            path={page.pageLink}
                            render={(props: any) => <page.view {...{...props}}/>}
                            key={index}
                        />
                    );
                })}
                <Redirect to="/" />
            </Switch>
        </HistoryContext.Provider>
    )
}

const mapStateToProps = (state: any) => ({
    userType: state.userType,
    isAuth: state.isAuth
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setIsAuth, 
    setUserType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);