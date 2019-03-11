import React, { Component } from 'react';
import Header from './components/Header';
import News from './components/News';
import ChatList from './components/ChatList';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    let wrapper = {
      display: 'grid',
      gridTemplateColumns: '2fr 2fr 2fr'
    }
    return (
      <div>
        <Header />
        <div style={wrapper}>
          <News />
          <ChatList />
          <SideBar />
        </div>
        <Footer />
      </div>  
    );
  }
}

export default App;
