import React from 'react';
import PropTypes from 'prop-types'

function Post(props){
  return (
    <div>
       <h3>{props.names}</h3>
        <p><em>{props.message}</em></p>
        <h4>{props.formattedWaitTime}</h4>
    </div>
  );
}

export default Post;

Post.propTypes = {
    names: PropTypes.string,
    message: PropTypes.string   
}