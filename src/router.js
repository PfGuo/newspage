import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './layouts/NewsPage/IndexPage';
import BlackBoardDetail from './layouts/NewsPage/BlackBoardDetail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/detail" component={BlackBoardDetail} />
    </Router>
  );
}

export default RouterConfig;
