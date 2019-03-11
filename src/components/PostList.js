import React from 'react';
import Post from './Post';
import NewPostCreation from './NewPostCreation';

class PostList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      masterPostList: []
    }
  }

  handleAddingNewPostToList(newPost) {
    var newMasterPostList = this.state.masterPostList.slice()
    Post = newPost
    newMasterPostList.push(Post)
    this.setState({ masterPostList: newMasterPostList })
  }

  render() {
    return (
      <div>
        <h1>PostList Works</h1>
        <Post />
        <NewPostCreation />
      </div>
    );
  }
}

export default PostList;