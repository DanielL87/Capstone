import React, { Component } from 'react';
import Header from './components/Header';
import News from './components/News';
import PostList from './components/PostList';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
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
        <div style={wrapper}>
          <News />
          <PostList />
          <SideBar />
        </div>
        <Footer />
      </div>  
    );
  }
}

export default App;
