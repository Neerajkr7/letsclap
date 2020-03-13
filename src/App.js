import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './Pages/MainPage'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/:id" component={() => <h6>Clap For user</h6>} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
