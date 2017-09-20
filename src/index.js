import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/Layout';
import Home from './components/Home';

//


ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path='/' component={Home}/>

    </Switch>
  </BaseLayout>
</BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
