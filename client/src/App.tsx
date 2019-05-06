import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodoPage } from 'pages/todo';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>Sample Todo</title>
        </Helmet>
        <Route exact path="/" component={TodoPage} />
      </div>
    </Router>
  );
}

export default App;
