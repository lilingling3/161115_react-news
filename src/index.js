import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './components/app'
import NewsContainer from './components/news_container'
import NewsDetail from './components/news_detail'
import UserCenter from './components/user_center'
import MediaQuery from 'react-responsive'

import './index.css'

render((

<div>
  <MediaQuery query='(min-device-width: 1224px)'>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={NewsContainer}></IndexRoute>
        <Route path='/news_detail/:news_id' component={NewsDetail}></Route>
        <Route path='/user_center' component={UserCenter}></Route>
      </Route>
    </Router>
  </MediaQuery>
  <MediaQuery query='(max-device-width: 1224px)'>
    <div>You are a tablet or mobile phone</div>
  </MediaQuery>
</div>


), document.getElementById('root'))


