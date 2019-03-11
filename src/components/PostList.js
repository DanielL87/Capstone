import React from 'react';
import Post from './Post';
import NewPostCreation from './NewPostCreation';
import Moment from 'moment'

class PostList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      masterPostList: []
    }
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this)
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePostElapsedWaitTime(),
    5000
    )
  }

  updatePostElapsedWaitTime() {
    let newMasterPostList = this.state.masterPostList.slice()
    newMasterPostList.forEach((post) =>
      post.formattedWaitTime = (post.timePosted).fromNow(true)
    )
    this.setState({masterPostList: newMasterPostList})
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer)
  }

  displayTimePosted(timePosted) {
    return timePosted.from(new Moment(), true)
  }


  handleAddingNewPostToList(newPost) {
    let newMasterPostList = this.state.masterPostList.slice()
    newPost.formattedWaitTime = (newPost.timePosted).fromNow(true)
    newMasterPostList.push(newPost)
    this.setState({ masterPostList: newMasterPostList })
  }

  addLike(id) {
    for (let post of this.state.masterPostList) {
      if (post.id === id) {
        post.likes++
        let newState = Object.assign({}, this.state.masterPostList, post)
        this.setState({ newState })

      }
    }
  }

  addDislike(id) {
    for (let post of this.state.masterPostList) {
      if (post.id === id) {
        post.dislikes++
        let newState = Object.assign({}, this.state.masterPostList, post)
        this.setState({ newState })
      }
    }
  }

  render() {
    return (
      <div>
        <NewPostCreation NewPost={this.handleAddingNewPostToList}/>
        {this.state.masterPostList.map((post) =>
        <Post 
        names={post.names}
        message={post.message}
        likes={post.likes}
        dislikes={post.dislikes}
        formattedWaitTime={post.formattedWaitTime}
        key={post.id}
        addLike={() => this.addLike(post.id)}
        addDislike={() => this.addDislike(post.id)}
        />
        )}
      </div>
    );
  }
}

export default PostList;