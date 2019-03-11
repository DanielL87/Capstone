import React from 'react'
import { v4 } from 'uuid'
import Moment from 'moment'
import '../App.css'

function NewPostCreation(props) {
    let _names = null
    let _message = null

    function handleNewPost(event) {
        event.preventDefault()
        props.NewPost({ names: _names.value, message: _message.value, likes: 0, dislikes: 0, id: v4(), timePosted: new Moment() })
        _names.value = ''
        _message.value = ''
      }
  
    return (
        <div className='input'>
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