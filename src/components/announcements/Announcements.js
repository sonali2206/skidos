import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AnnouncementCard from './AnnouncementCard';
import Sidebar from '../Sidebar';

function AnnouncementList() {
  const email = JSON.parse(localStorage.getItem('UserInfo'));
  const [announcements, setAnnouncements] = useState([]);

  const getAnnouncements = () => {
    axios
      .get('http://localhost:3000/announcementsList')
      .then((response) => {
        response.data.reverse();
        setAnnouncements(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Fetch announcements
    getAnnouncements();
  }, []);

  return (
    <div className="bg-light py-4 p-lg-5 min-h-full announcement_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {announcements?.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                id={announcement.id}
                title={announcement.title}
                description={announcement.description}
                categories={announcement.categories}
                comments={announcement.comments}
                user={email}
                getAnnouncements={getAnnouncements}
              />
            ))}
          </div>
          <div className="col-lg-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementList;
