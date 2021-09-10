import  React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsSearch from '../../containers/NewsSearch';

export default class App extends Component {
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <NewsSearch {...routerProps} />}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
