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


//


ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path='/about' component={About}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/' component={Home}/>


    </Switch>
  </BaseLayout>
</BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
