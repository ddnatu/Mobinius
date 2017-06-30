import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// You can uncomment and check that every individual component is working...
 ReactDOM.render(<App />, document.getElementById('app'));

// comment this while checking for individual components.

/*ReactDOM.render((
<Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "contactus" component = {Contact} />
         <Route path = "services" component = {Services} />
      </Route>
</Router>
), document.getElementById('app'));*/
