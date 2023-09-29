function Comment({ user, commentedAt, message }) {
  return (
    <div className="mb-3 comment_card">
      <p className="mb-0">
        <strong>{user}</strong>
        <small className="text-muted ms-2 ">({commentedAt})</small>
      </p>
      <p className="mb-0">{message}</p>
    </div>
  );
}

export default Comment;
