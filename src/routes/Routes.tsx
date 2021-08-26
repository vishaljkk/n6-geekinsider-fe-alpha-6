import { useState, Suspense, lazy, useEffect, createContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { setSignIn, setSignOut, setUserType } from '../redux/actions';
import { initialFormStateTypes, AppTypes } from './types';
import { isAuthenticated } from '../utils';

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

const initialFormState: initialFormStateTypes = {
    username: "",
    password: "",
    email: "",
    authCode: "",
    formType: "signIn",
};

export const HistoryContext = createContext({});

const Routes: React.FC<AppTypes> = (props) => {

    const { setSignIn, setSignOut, userType, setUserType, history } = props;
    const [formState, updateFormState] = useState(initialFormState);
    const [user, updateUser] = useState(null);
    const { formType } = formState;

    useEffect(() => {
        isAuthenticated().then(resp => {
            if (resp) {
                history.push('/home');
            }
            else {
                history.push('/login');
            }
        })
    }, [])

    return (
        <HistoryContext.Provider value={history}>
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
    userType: state.userType
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setSignIn, 
    setSignOut, 
    setUserType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

// backup junk code(will be deleted after successfull flow implementation)
{/* {formType === 'confirmSignUp' || formType === 'signUp' ? (
        <Signup
          onChange={onChange}
          formType={formType}
          userType={userType}
          setUserType={setUserType}
          updateFormState={updateFormState}
        />
      ) : null} */}

      {/* {formType === "signIn" && (
        <Login
          onChange={onChange}
          formType={formType}
          updateFormState={updateFormState}
          userType={userType}
          setUserType={setUserType}
        />
      )} */}

      {/* {formType === "signedIn" && (
        <>
          <NavBar signOut={() => Auth.signOut()}/>
          <SearchResult />
          <LandingPage />
          <Messages/>
          {userType === 'recruiter' ? 
            <RecruiterOnboarding formState={formState} getUserInfo={getUserInfo}/> : 
            <CandidateOnboarding formState={formState} getUserInfo={getUserInfo}/>
          }
        </>
      )} */}