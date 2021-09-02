import { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { store } from './redux/store';
import Loader from './components/Loader';
import './configureAmplify';
import './App.scss';
 
const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="loader--global"><Loader className="loader--global" /></div>}>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" render={(props: any) => <Routes {...props} />} />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;