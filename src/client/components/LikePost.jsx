import React from 'react';
const LikePost = ({ postId, onLikePost }) => {
    const handleLike = () => {
      onLikePost(postId);
    };

    const handleLikeClick = async () => {
        try {
          const response = await fetch('/addLike', {
            method: 'POST',
          });
          const updatedPost = await response.json();
          console.log('Post liked successfully:', updatedPost);
        } catch (err) {
          console.error('ERROR in AddPost HandleSubmit:', err);
        }
      };

    return (
        <div>
            <button onClick={handleLike}>
                <span role="img" aria-label="Thumbs Up">👍</span> Like
            </button>
        </div>
    );
};


export default LikePost;
  