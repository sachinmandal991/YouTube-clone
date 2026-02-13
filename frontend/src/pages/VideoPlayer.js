import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`/api/videos/${id}`).then(res => setVideo(res.data));
    axios.get(`/api/comments/${id}`).then(res => setComments(res.data));
  }, [id]);

  const handleLike = () => {
    axios.post(`/api/videos/${id}/like`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setVideo(res.data));
  };

  const handleComment = (e) => {
    e.preventDefault();
    axios.post('/api/comments', { text: commentText, videoId: id }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setComments([res.data, ...comments]);
      setCommentText('');
    });
  };

  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-player-container" style={{ marginLeft: '260px' }}>
      <video className="video-player" controls src={`http://localhost:5000/${video.videoUrl}`} />
      <div className="video-details">
        <h2>{video.title}</h2>
        <p>{video.views} views • {video.likes?.length} likes</p>
        <p>{video.description}</p>
        <div className="video-actions">
          {token && <button onClick={handleLike}>Like</button>}
        </div>
      </div>
      <div className="comments-section">
        <h3>{comments.length} Comments</h3>
        {token && (
          <form onSubmit={handleComment} style={{ marginTop: '15px' }}>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            <button type="submit">Comment</button>
          </form>
        )}
        {comments.map(comment => (
          <div key={comment._id} className="comment">
            <div className="comment-author">{comment.user?.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
