import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TodoPage } from 'pages/todo';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={TodoPage} />
      </div>
    </Router>
  );
}

export default App;
