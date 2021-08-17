import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,  
  Redirect
} from "react-router-dom";
import Signup from './components/Signup/Signup.tsx';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import CandidateOnboarding from './components/Onboarding/CandidateOnboarding.tsx';
import RecruiterOnboarding from './components/Onboarding/RecruiterOnboarding.tsx';
import JobPostingForm from './components/JobPostingForm';
import './App.scss';

function App() {

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      // history.push("/Login")
    }
    else localStorage.setItem('token', 'abc');
    console.log(localStorage)
  }, [])

  return (
    <Router>
      <Switch>
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
      </Switch>
    </Router>
  );
}

export default App;