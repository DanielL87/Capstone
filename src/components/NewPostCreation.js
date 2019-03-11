import React from 'react'
import { v4 } from 'uuid'


function NewPostCreation(props) {
    let _names = null
    let _message = null

    function handleNewPost(event) {
        event.preventDefault()
        props.NewPost({ names: _names.value, message: _message.value, id: v4() })
        _names.value = ''
        _message.value = ''
      }
  
    return (
        <div >
          <form onSubmit={handleNewPost}>
            <input type="text" placeholder="User Name" id='names' ref={(input) => { _names = input }} />
            <br />
            <input type='text' id='message' placeholder='Message' ref={(input) => { _message = input }} />
            <button type="submit">Post</button>
          </form>
        </div>
      )
}

export default NewPostCreation