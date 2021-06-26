import React from 'react';
import './App.scss';
import {
  IonApp
} from '@ionic/react';
import {ROUTES} from './pages';
import { Route , HashRouter as Router} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
    <IonApp>
      {ROUTES.map(routeProps=> <Route {...routeProps} />)}
      </IonApp>

  </Router>
  
  );
}

export default App;
