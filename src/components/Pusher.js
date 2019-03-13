import React, { Component } from 'react';
import Pusher from 'pusher-js';
import '../App.css'

class PusherFeed extends Component {
    constructor(props) {
        super(props)
     this.state = {
    newsItems: [],
  }
}

  componentDidMount() {
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-13&sortBy=publishedAt&apiKey=01369db0360c474da9a84b1fef6f6047`)
      .then(response => response.json())
      .then(articles => {
        console.log(articles.articles)
        this.setState({
          newsItems: articles.articles,
        });
      }).catch(error => console.log(error));

    const pusher = new Pusher(`${process.env.REACT_APP_PUSHER_APP_KEY}`, {
      cluster: `${process.env.REACT_APP_PUSHER_APP_CLUSTER}`,
      encrypted: true,
      
    });
    const channel = pusher.subscribe('news-channel');
    channel.bind('update-news', data => {
      this.setState({
        newsItems: [...data.articles, ...this.state.newsItems],
      });
    });
  }


  render() {
    return (
    
      <div className="App">
        <ul>
            {this.state.newsItems.map((post) =>
            <div>
                <img src={post.urlToImage} className='articleImage' alt=''></img>
                <li><a href={`${post.url}`}>{post.title}</a></li>
            </div>

            )}
            </ul>
      </div>

    );
  }
}

export default PusherFeed;