import React from 'react';
import Post from './Post';
import NewPostCreation from './NewPostCreation';

class PostList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      masterPostList: []
    }
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this)
  }

  handleAddingNewPostToList(newPost) {
    var newMasterPostList = this.state.masterPostList.slice()
    let Post = newPost
    newMasterPostList.push(Post)
    this.setState({ masterPostList: newMasterPostList })
  }

  render() {
    return (
      <div>
        <NewPostCreation NewPost={this.handleAddingNewPostToList}/>
        {this.state.masterPostList.map((post) =>
        <Post 
        names={post.names}
        message={post.message}
        />
        )}
      </div>
    );
  }
}

export default PostList;