import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TodoPage } from 'pages/todo';

import store from './store';
import { Provider } from 'react-redux';

const App: React.SFC = () => {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path="/" component={TodoPage} />
        </Switch>
     </Router>
    </Provider>
  );
}

export default App;
