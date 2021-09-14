import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import './configureAmplify';
import './App.scss';

const Routes = lazy(() => import('./routes'));
 
const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="loader--global"><Loader className="loader--global" /></div>}>
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" render={(props: any) => <Routes {...props} />} />
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;