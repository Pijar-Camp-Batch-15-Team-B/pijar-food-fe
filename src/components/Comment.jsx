import React from 'react'

function Comment(props) {
  const {message, username, photo_profile} = props

  return (
    <div id='commentSection'>
        <div className="d-flex commentComponent">
          <div className="commentProfile">
            <img src={photo_profile} alt="profile"></img>
          </div>
          <div className="deskComment">
            <h6 className="commentName">{username}</h6>
            <p className="textComment">{message}</p>
          </div>
        </div>
    </div>
  )
}

export default Comment
