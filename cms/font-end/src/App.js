import React, { Component } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/dashboard.css';
//import 'bootstrap/dist/css/bootstrap-grid.css';
//import 'bootstrap/dist/css/bootstrap-reboot.css';
//import 'bootstrap/scss/bootstrap.scss';


import { BrowserRouter as Router, Route } from 'react-router-dom';
// 复用组件
import Xheader from './components/Xheader/Xheader.jsx';
import Xdashboard from './components/Xdashboard/Xdashboard.jsx';

// 一级路由
import Dashboard from './containers/Dashboard/Dashboard.jsx';
import Orders from './containers/Orders/Orders.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Xheader />
          <div className="container-fluid">
            <div className="row">
            <Xdashboard />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/Orders" component={Orders} />
            </main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
