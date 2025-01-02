import React, { useContext } from "react";
import DataContext from "../context/DataContext";

export const NewPost = () => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } =
    useContext(DataContext);
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={(e) => handleSubmit(e)}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label>Post:</label>
        <textarea
        className="post-body"
          type="text"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <div className="btn">
          <button type="submit" className="post-btn">Submit</button>
        </div>
      </form>
    </main>
  );
};
