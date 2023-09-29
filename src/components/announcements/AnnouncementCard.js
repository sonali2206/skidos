import AddComment from '../comments/AddComment';
import Comments from '../comments/Comments';

function AnnouncementCard({
  title,
  description,
  categories,
  comments,
  id,
  user,
  getAnnouncements,
}) {
  return (
    <div className="bg-white p-4 rounded announcement_card">
      <p className="mb-2">
        <small className="text-secondary">
          22/03/2022, <span className="ms-1 text-secondary">08:48:15</span>
        </small>
      </p>
      <h4>{title}</h4>
      <ul className="categories list-unstyled list-inline d-flex g-2">
        <li>{categories}</li>
      </ul>
      <p>{description}</p>
      <p>Skidos Team,</p>
      {comments && <Comments comments={comments} user={user} />}
      <AddComment
        announcementId={id}
        user={user}
        getAnnouncements={getAnnouncements}
      />
    </div>
  );
}

export default AnnouncementCard;
