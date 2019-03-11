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

  render() {
    console.log(this.state.masterPostList)
    return (
      <div>
        <NewPostCreation NewPost={this.handleAddingNewPostToList}/>
        {this.state.masterPostList.map((post) =>
        <Post 
        names={post.names}
        message={post.message}
        formattedWaitTime={post.formattedWaitTime}
        />
        )}
      </div>
    );
  }
}

export default PostList;