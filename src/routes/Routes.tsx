import { useState, Suspense, lazy, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Auth, Hub } from "aws-amplify";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { setSignIn, setSignOut, setUserType } from '../redux/actions';
import { initialFormStateTypes, AppTypes } from './types';

const Signup = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const NavBar = lazy(() => import('../pages/NavBar'));
const SearchResult = lazy(() => import('../pages/SearchAndFilters'));
const Messages = lazy(() => import('../pages/Messages'));
const JobPostingForm = lazy(() => import('../pages/JobPostingForm'));
const CandidateOnboarding = lazy(() => import('../pages/Onboarding/CandidateOnboarding'));
const RecruiterOnboarding = lazy(() => import('../pages/Onboarding/RecruiterOnboarding'));

const pages = [
    {
        pageLink: '/',
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
        pageLink: '/searchResult',
        view: SearchResult,
        displayName: 'Search Result',
        showInNavbar: false,
    }
];

const initialFormState: initialFormStateTypes = {
    username: "",
    password: "",
    email: "",
    authCode: "",
    formType: "signIn",
};

const Routes: React.FC<AppTypes> = (props) => {

    const { setSignIn, setSignOut, userType, setUserType } = props;
    const [formState, updateFormState] = useState(initialFormState);
    const [user, updateUser] = useState(null);
    const { formType } = formState;

    useEffect(() => {
        checkUser();
        setAuthListener();
    }, []);
    
    useEffect(() => {
        redirectPage(formState.formType);
    }, [formState])

    const checkUser = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setSignIn(user);
            // const token = user.signInUserSession.idToken.jwtToken;
            updateUser(user);
            updateFormState(() => ({ ...formState, formType: "signedIn" }));
        } 
        catch (err) {
            updateFormState(() => ({ ...formState, formType: "signIn" }));
        }
    };

    // Skip this if you're not using Hub. You can call updateFormState function right
    // after the Auth.signOut() call in the button.
    const setAuthListener = async () => {
        Hub.listen("auth", (data) => {
            switch (data.payload.event) {
                case "signOut":
                    setSignOut()
                    updateFormState(() => ({
                        ...formState,
                        formType: "signIn",
                    }));
                    break;
                case "signIn":
                    setSignIn(data.payload.data)
                    break;
            }
        });
    };

    const redirectPage = (text: string) => {
        switch(text) {
            case 'signedIn':
                return '/'
            case 'message':
                return '/messages'
            case 'confirmSignUp':
            case 'signUp':
            case 'signIn':
                return '/auth';
            default:
                return '/';
        }
    }
    
    const getUserInfo = () => {
        return Auth.currentSession()
            .then(resp => {
            return resp
            })
            .catch(error => console.error(error))
    }

    const onChange = (e: any) => {
        e.persist();
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
    };

    return (
        <Suspense fallback={<div />}>
            <Router>
                <Switch>
                    {pages.map((page, index) => {
                        return (
                            <Route
                                exact
                                path={page.pageLink}
                                render={() => <page.view />}
                                key={index}
                            />
                        );
                    })}
                    <Redirect to="/" />
                </Switch>
            </Router>
        </Suspense>
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