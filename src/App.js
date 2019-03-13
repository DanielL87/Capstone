import React, { Component } from 'react';
import Header from './components/Header';
import PusherFeed from './components/Pusher';
import User from './components/User';
import PostList from './components/PostList';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Notifications from './components/Notifications';
import { Router, Route, Switch } from 'react-router'

import './App.css'

class App extends Component {
  render() {
    let wrapper = {
      display: 'grid',
      gridTemplateColumns: '2fr 2fr 2fr'
    }
    return (
      <div>
        <Header />
        <hr/>
        <div id='newsHeader'>
        <PusherFeed />
        </div>
        <hr/>
        <div style={wrapper}>
          <User />
            <Switch>
              <Route exact path='/' component={PostList} />
              <Route path='/notifications' component={Notifications}/>
            </Switch>
          <SideBar />
        </div>
        <Footer />
      </div>  
    );
  }
}

export default App;
