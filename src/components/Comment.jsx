import React from 'react'

export default function Comment() {
  return (
    <div id='commentSection'>
        <div className="d-flex commentComponent">
          <div className="commentProfile">
            <img src="/images/profile.png" alt="profile"></img>
          </div>
          <div className="deskComment">
            <h6 className="commentName">ayudia</h6>
            <p className="textComment">ini adalah contoh comment </p>
          </div>
        </div>
    </div>
  )
}
