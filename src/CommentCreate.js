import React, { useState } from 'react';
import axios from 'axios';

export default({ postId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4040/posts/${postId}/comments`,{
      content
    });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          style={{ marginTop: "10px"}}>
            Submit
        </button>
      </form>
    </div>
  )
}