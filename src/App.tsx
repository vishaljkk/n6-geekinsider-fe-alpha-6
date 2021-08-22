import './configureAmplify';
import { useState, useEffect } from 'react';
import { Auth, Hub, API } from "aws-amplify";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,  
  Redirect
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import CandidateOnboarding from './components/Onboarding/CandidateOnboarding';
import RecruiterOnboarding from './components/Onboarding/RecruiterOnboarding';
import JobPostingForm from './components/JobPostingForm';
import Messages from './components/Messages';
import ProfileView from './components/ProfileView';
import { setSignIn, setSignOut, setUserType } from './redux/actions';
import { initialFormStateTypes } from './types';
import './App.scss';

const initialFormState: initialFormStateTypes = {
  username: "",
  password: "",
  email: "",
  authCode: "",
  formType: "signIn",
};
 
function App(props: any) {
  
  const { setSignIn, setSignOut, userType, setUserType } = props;
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setSignIn(user);
      // const token = user.signInUserSession.idToken.jwtToken;
      // console.log({token})  
      updateUser(user);
      updateFormState(() => ({ ...formState, formType: "signedIn" }));
    } 
    catch (err) {
      updateFormState(() => ({ ...formState, formType: "signIn" }));
      console.log("checkUser error", err);
    }
  };

  // Skip this if you're not using Hub. You can call updateFormState function right
  // after the Auth.signOut() call in the button.
  const setAuthListener = async () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          console.log(data);
          setSignOut()
          updateFormState(() => ({
            ...formState,
            formType: "signIn",
          }));
          break;
        case "signIn":
          console.log(data)
          setSignIn(data.payload.data)
          break;
      }
    });
  };

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  const onChange = (e: any) => {
    e.persist();
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  };

  const getUserInfo = () => {
    return Auth.currentSession()
      .then(resp => {
        return resp
      })
      .catch(error => console.log(error))
  }
  
  const { formType } = formState;

  return (
    <Router>
      {/* {formType === "signUp" && (
        <Signup
          onChange={onChange}
          userType={userType}
          setUserType={setUserType}
          updateFormState={updateFormState}
        />
      )} */}

      {formType === 'confirmSignUp' || formType === 'signUp' ? (
        <Signup
          onChange={onChange}
          formType={formType}
          // confirmSignUp={confirmSignUp}
          userType={userType}
          setUserType={setUserType}
          updateFormState={updateFormState}
        />
      ) : null}

      {formType === "signIn" && (
        <Login
          onChange={onChange}
          formType={formType}
          updateFormState={updateFormState}
          userType={userType}
          setUserType={setUserType}
        />
      )}

      {formType === "signedIn" && (
        <>
          <ProfileView signOut={() => Auth.signOut()}/>
          <LandingPage />
          {/* {userType === 'recruiter' ? 
            <RecruiterOnboarding formState={formState} getUserInfo={getUserInfo}/> : 
            <CandidateOnboarding formState={formState} getUserInfo={getUserInfo}/>
          } */}
        </>
        // <div>
        //   <h2>
        //     Welcome to the app 
        //   </h2>
        //   <button
        //     onClick={() => {
        //       Auth.signOut();
        //     }}
        //   >
        //     Sign out
        //   </button>
        // </div>
      )}

      {/* <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/Landing">
          <LandingPage />
        </Route>
        <Route path="/candidate/onboarding">
          <CandidateOnboarding />
        </Route>
        <Route path="/recruiter/onboarding">
          <RecruiterOnboarding />
        </Route>
        <Route path="/recruiter/postjob">
          <JobPostingForm />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/profile">
          <ProfileView />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch> */}
    </Router>
  );
}

const mapStateToProps = (state: any) => ({
  userType: state.userType
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setSignIn, 
    setSignOut, 
    setUserType
  }, dispatch)
};

{/* // export default connect(null,{setSignIn, setSignOut})(App); */}
export default connect(mapStateToProps, mapDispatchToProps)(App);