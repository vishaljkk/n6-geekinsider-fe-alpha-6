import './configureAmplify';
import { useState, useEffect } from 'react';
import { Auth, Hub, API } from "aws-amplify";
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
import { StateUITypes } from './types';
import './App.scss';

import { setSignIn, setSignOut } from './redux/actions';

const initialFormState = {
  username: "",
  password: "",
  email: "",
  authCode: "",
  formType: "signIn",
};

// const App: React.FC = () => {

//   return (
//       <Router>
//         <Switch>
//           {/* <Route path="/login">
//             <Login />
//           </Route> */}
//           <Route path="/signup">
//             <Signup />
//           </Route>
//           <Route path="/Landing">
//             <LandingPage />
//           </Route>
//           <Route path="/candidate/onboarding">
//             <CandidateOnboarding />
//           </Route>
//           <Route path="/recruiter/onboarding">
//             <RecruiterOnboarding />
//           </Route>
//           <Route path="/recruiter/postjob">
//             <JobPostingForm />
//           </Route>
//           <Route path="/messages">
//             <Messages />
//           </Route>
//           <Route path="/profile">
//             <ProfileView />
//           </Route>
//           <Route path="/">
//             <LandingPage />
//           </Route>
//         </Switch>
//         <div>
//           {
//             !uiState || uiState === 'loading' && <p className="font-bold">Loading ...</p>
//           }
//           {
//             uiState === 'signedIn' && (
//               <Link to="/profile">
//                 <ProfileView
//                   // setUiState={setUiState}
//                   // onChange={onChange}
//                 />
//               </Link>
//             )
//           }
//           {
//             uiState === 'signUp' && (
//               <Link to="/signup">
//                 <Signup
//                   // setUiState={setUiState}
//                   // onChange={onChange}
//                   // signUp={signUp}
//                 />
//               </Link>
//             )
//           }
//           {
//             uiState === 'confirmSignUp' && (
//               <Signup
//                 // setUiState={setUiState}
//                 // onChange={onChange}
//                 // confirmSignUp={confirmSignUp}
//               />
//             )
//           }
//           {
//             uiState === 'signIn' && (
//               <Link to="/login">
//                 <Login
//                   setUiState={setUiState}
//                   onChange={onChange}
//                   signIn={signIn}
//                 />
//               </Link>
//             )
//           }
//           {
//             // uiState === 'forgotPassword' && (
//             //   <ForgotPassword 
//             //     setUiState={setUiState}
//             //     onChange={onChange}
//             //     forgotPassword={forgotPassword}
//             //   />
//             // )
//           }
//           {/* {
//             uiState === 'forgotPasswordSubmit' && (
//               <ForgotPasswordSubmit
//                 setUiState={setUiState}
//                 onChange={onChange}
//                 forgotPasswordSubmit={forgotPasswordSubmit}
//               />
//             )
//           } */}
//         </div>
//       </Router>
//   );
// }

// export default connect(null,{setSignIn, setSignOut})(App);

 
function App(props: {setSignIn: any, setSignOut: any}) {
  
  const {setSignIn, setSignOut} = props;
  const [formState, updateFormState] = useState(initialFormState);

  const [user, updateUser] = useState(null);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setSignIn(user);
      // const token = user.signInUserSession.idToken.jwtToken;
      // console.log({token})
      // const requestInfo = {headers :  {
      //   'Authorization' : token,
      //   "Access-Control-Allow-Origin":"*",
      //   "Access-Control-Allow-Headers":"*"
      // }}
      // const data = await API.get('testdb','/testdb', requestInfo)
      // console.log(data);  
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

  const { formType } = formState;

  const signUp = async (values: any) => {
    const { email, password } = values;
    try {
      await Auth.signUp({ username: email, password, attributes: { email } });
      updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
    }
    catch(e){
      console.log(e)
    }
  };

  const confirmSignUp = async (values: any) => {
    console.log(values)
    const { email, authCode } = values;
    try {
      await Auth.confirmSignUp(email, authCode);
      updateFormState(() => ({ ...formState, formType: "signIn" }));
    }
    catch(e) {
      console.log(e);
    }
  };

  const signIn = async (obj: any) => {
    const { username, password } = obj;
    await Auth.signIn(username, password);
    updateFormState(() => ({ ...formState, formType: "signedIn" }));
  };

  return (
    <Router>
      <h1>App</h1>

      {formType === "signUp" && (
        <div>
          {/* <input name="username" onChange={onChange} placeholder="username" />
          <input
            name="password"
            type="password"
            onChange={onChange}
            placeholder="password"
          />
          <input name="email" onChange={onChange} placeholder="email" />

          <button onClick={signUp}>Sign Up</button>

          <p>Already signed up?</p>

          <button
            onClick={() =>
              updateFormState(() => ({
                ...formState,
                formType: "signIn",
              }))
            }
          >
            Sign In instead
          </button> */}
          <Signup
            // setUiState={setUiState}
            onChange={onChange}
            signUp={signUp}
          />
        </div>
      )}

      {formType === "confirmSignUp" && (
        <Signup
          // setUiState={setUiState}
          onChange={onChange}
          signUp={signUp}
          formType={formType}
          confirmSignUp={confirmSignUp}
        />
      )}

      {formType === "signIn" && (
        // <div>
        //   <input name="username" onChange={onChange} placeholder="username" />
        //   <input
        //     name="password"
        //     type="password"
        //     onChange={onChange}
        //     placeholder="password"
        //   />
        //   <button onClick={signIn}>Sign In</button>

        //   <p>No account yet?</p>

        //   <button
        //     onClick={() =>
        //       updateFormState(() => ({
        //         ...formState,
        //         formType: "signUp",
        //       }))
        //     }
        //   >
        //     Sign Up now
        //   </button>
        // </div>
        // <Link to="/login">
          <Login
            // setUiState={setUiState}
            onChange={onChange}
            signIn={signIn}
            formType={formType}
            signUp={() => updateFormState(() => ({
              ...formState,
              formType: "signUp",
            }))}
          />
        // </Link>
      )}

      {formType === "signedIn" && (
        <ProfileView signOut={() => Auth.signOut()}/>
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

export default connect(null,{setSignIn, setSignOut})(App);