import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/Layout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contacts from './components/Contacts';
import References from './components/References';


//


ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path='/about' component={About}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/references' component={References}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/' component={Home}/>
    </Switch>
  </BaseLayout>
</BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
