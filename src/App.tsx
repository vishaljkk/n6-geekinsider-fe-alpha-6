import './configureAmplify';
import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Hub, API } from "aws-amplify";
// import { connect } from 'react-redux';
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

// import { set_sign_in, set_sign_out } from 'redux/actions/auth.actions'
// import { store } from "redux/store";


const initialFormState = {
  username: "",
  password: "",
  email: "",
  authCode: "",
  formType: "signIn",
};

const App: React.FC = () => {
  
  const [uiState, setUiState] = useState<StateUITypes>(null)
  const [formState, setFormState] = useState({
    email: '', password: '', authCode: ''
  })
  
  const { email, password, authCode } = formState

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    console.log('checking user...')
    try {
      setUiState('loading')
      await Auth.currentAuthenticatedUser()
      setUiState('signedIn')
    } catch(err) {
      console.log(err)
      setUiState('signIn')
    }
  }
  function onChange(e: any) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  async function signUp() {
    try {
      await Auth.signUp({ username: email, password, attributes: { email }})
      setUiState('confirmSignUp')
    } catch (err) { console.log({ err })}
  }
  async function confirmSignUp() {
    try {
      await await Auth.confirmSignUp(email, authCode)
      await Auth.signIn(email, password)
      setUiState('signedIn')
    } catch (err) { console.log({ err })}

  }
  async function signIn() {
    try {
      await Auth.signIn(email, password)
      setUiState('signedIn')
    } catch (err) { console.log({ err })}
  }
  async function forgotPassword() {
    try {
      await Auth.forgotPassword(email)
      setUiState('forgotPasswordSubmit')
    } catch (err) { console.log({ err}) }
  }
  async function forgotPasswordSubmit() {
    await Auth.forgotPasswordSubmit(email, authCode, password)
    setUiState('signIn')
  }

  return (
      <Router>
        <Switch>
          {/* <Route path="/login">
            <Login />
          </Route> */}
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
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <div>
          {
            !uiState || uiState === 'loading' && <p className="font-bold">Loading ...</p>
          }
          {
            uiState === 'signedIn' && (
              <Link to="/profile">
                <ProfileView
                  // setUiState={setUiState}
                  // onChange={onChange}
                />
              </Link>
            )
          }
          {
            uiState === 'signUp' && (
              <Link to="/signup">
                <Signup
                  setUiState={setUiState}
                  onChange={onChange}
                  signUp={signUp}
                />
              </Link>
            )
          }
          {/* {
            uiState === 'confirmSignUp' && (
              <ConfirmSignUp
                // setUiState={setUiState}
                // onChange={onChange}
                // confirmSignUp={confirmSignUp}
              />
            )
          } */}
          {
            uiState === 'signIn' && (
              <Link to="/login">
                <Login
                  setUiState={setUiState}
                  onChange={onChange}
                  signIn={signIn}
                />
              </Link>
            )
          }
          {
            // uiState === 'forgotPassword' && (
            //   <ForgotPassword 
            //     setUiState={setUiState}
            //     onChange={onChange}
            //     forgotPassword={forgotPassword}
            //   />
            // )
          }
          {/* {
            uiState === 'forgotPasswordSubmit' && (
              <ForgotPasswordSubmit
                setUiState={setUiState}
                onChange={onChange}
                forgotPasswordSubmit={forgotPasswordSubmit}
              />
            )
          } */}
        </div>
      </Router>
  );
}

// export default connect(null,{set_sign_in, set_sign_out})(App);

 
// function authTshila({set_sign_in, set_sign_out}) {
//   const [formState, updateFormState] = useState(initialFormState);

//   const [user, updateUser] = useState(null);
//   const checkUser = async () => {
//     try {
//       const user = await Auth.currentAuthenticatedUser();
//       set_sign_in(user)
//       const token = user.signInUserSession.idToken.jwtToken;
//       console.log({token})
//       const requestInfo = {headers :  {
//         'Authorization' : token,
//         "Access-Control-Allow-Origin":"*",
//         "Access-Control-Allow-Headers":"*"
//       }}
//       const data = await API.get('testdb','/testdb', requestInfo)
//       console.log(data);  
//       updateUser(user);
//       updateFormState(() => ({ ...formState, formType: "signedIn" }));
//     } catch (err) {
//         console.log("checkUser error", err);
//     }
//   };

//   // Skip this if you're not using Hub. You can call updateFormState function right
//   // after the Auth.signOut() call in the button.
//   const setAuthListener = async () => {
//     Hub.listen("auth", (data) => {
//     switch (data.payload.event) {
//     case "signOut":
//       console.log(data);
//       set_sign_out()
//       updateFormState(() => ({
//         ...formState,
//         formType: "signIn",
//       }));
//       break;
//     case "signIn":
//       console.log(data)
//       set_sign_in(data.payload.data)
//       break;
//     }
//     });
//   };

//   useEffect(() => {
//     checkUser();
//     setAuthListener();
//   }, []);

//   const onChange = (e: any) => {
//     e.persist();
//     updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
//   };

//   const { formType } = formState;

//   const signUp = async () => {
//     const { username, email, password } = formState;
//     await Auth.signUp({ username, password, attributes: { email } });
//     updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
//   };

//   const confirmSignUp = async () => {
//     const { username, authCode } = formState;
//     await Auth.confirmSignUp(username, authCode);
//     updateFormState(() => ({ ...formState, formType: "signIn" }));
//   };

//   const signIn = async () => {
//     const { username, password } = formState;
//     await Auth.signIn(username, password);
//     updateFormState(() => ({ ...formState, formType: "signedIn" }));
//   };

//   return (
//     <>
//       <h1>App</h1>

//       {formType === "signUp" && (
//         <div>
//           <input name="username" onChange={onChange} placeholder="username" />
//           <input
//             name="password"
//             type="password"
//             onChange={onChange}
//             placeholder="password"
//           />
//           <input name="email" onChange={onChange} placeholder="email" />

//           <button onClick={signUp}>Sign Up</button>

//           <p>Already signed up?</p>

//           <button
//             onClick={() =>
//               updateFormState(() => ({
//                 ...formState,
//                 formType: "signIn",
//               }))
//             }
//           >
//             Sign In instead
//           </button>
//         </div>
//       )}

//       {formType === "confirmSignUp" && (
//         <div>
//           <input
//             name="authCode"
//             onChange={onChange}
//             placeholder="cnfirm auth code"
//           />
//           <button onClick={confirmSignUp}>Confirm Sign up</button>
//         </div>
//       )}

//       {formType === "signIn" && (
//         <div>
//           <input name="username" onChange={onChange} placeholder="username" />
//           <input
//             name="password"
//             type="password"
//             onChange={onChange}
//             placeholder="password"
//           />
//           <button onClick={signIn}>Sign In</button>

//           <p>No account yet?</p>

//           <button
//             onClick={() =>
//               updateFormState(() => ({
//                 ...formState,
//                 formType: "signUp",
//               }))
//             }
//           >
//             Sign Up now
//           </button>
//         </div>
//       )}

//       {formType === "signedIn" && (
//         <div>
//           <h2>
//             Welcome to the app 
//           </h2>
//           <button
//             onClick={() => {
//               Auth.signOut();
//             }}
//           >
//             Sign out
//           </button>
//         </div>
//       )}

//       <hr />
//     </>
//   );
// }

export default App;