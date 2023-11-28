import React, { useState } from 'react';
const LikePost = (props) => {
  const { likes, id } = props
  const [likeAmount, setLikes] = useState(likes)

  //updates likes amount
  const handleLikeClick = async () => {
    try {
      const response = await fetch('/like', {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: id, likes: likeAmount})
      })
      const data = await response.json();
      setLikes(data)
    } catch (err) {
      console.error('Error found in handleLikeClick in LikePost.jsx:', err);
    }
  };

return (
    <div className="likeButton">
        <button onClick={handleLikeClick}>
            <span role="img" aria-label="Thumbs Up">👍  </span>{likeAmount}
        </button>
    </div>
  );
};


export default LikePost;
  