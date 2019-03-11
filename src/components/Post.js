import React from 'react';
import PropTypes from 'prop-types'


function Post(props){
  let buttons = {
    display: 'grid',
    gridTemplateColumns: '3fr 3fr'
  }
  let Btn = {
    marginTop: 13,
    height: 20,
    width: 50,
    backgroundColor: '#ceffa8',
    color: '#1420c8'
  }

  let Btn2 = {
    marginTop: 13,
    height: 20,
    width: 50,
    backgroundColor: '#ceffa8',
    color: '#f52433'
  }
  return (
    <div>
       <h3>{props.names}</h3>
        <p><em>{props.message}</em></p>
        <h4>{props.formattedWaitTime}</h4>
        <div style={buttons}>
          <button style={Btn} onClick={props.addLike}>Like</button><p className='likes'>{props.likes}</p>
          <button style={Btn2} onClick={props.addDislike}>Dislike</button><p className='likes'>{props.dislikes}</p>
        </div>
    </div>
  );
}

export default Post;

Post.propTypes = {
    names: PropTypes.string,
    message: PropTypes.string   
}