import './configureAmplify';
import './App.scss';
import Routes from './routes';
import { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
 
const App: React.FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" render={(props: any) => <Routes {...props} />} />
        </BrowserRouter>
      </Provider>
      </Suspense>
  );
}

export default App;