import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    axios.get('/api/videos')
      .then(res => {
        let filteredVideos = res.data;
        if (searchQuery) {
          filteredVideos = res.data.filter(video => 
            video.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        setVideos(filteredVideos);
      })
      .catch(err => console.error(err));
  }, [searchQuery]);

  return (
    <div className="container">
      <div className="video-grid">
        {videos.map(video => (
          <div key={video._id} className="video-card" onClick={() => navigate(`/video/${video._id}`)}>
            <video src={`http://localhost:5000/${video.videoUrl}`} />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.user?.username}</p>
              <p>{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
