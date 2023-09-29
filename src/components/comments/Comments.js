import React from 'react';
import Comment from './Comment';
function Comments({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          user={comment.user}
          commentedAt={comment.commentedAt}
          message={comment.message}
        />
      ))}
    </div>
  );
}

export default Comments;
