# YouTube Clone - MERN Stack

A minimal YouTube clone built with MongoDB, Express, React, and Node.js.

## Features

- User authentication (register/login)
- Video upload and streaming
- Video player with views counter
- Like/unlike videos
- Comments system
- Responsive grid layout

## Prerequisites

- Node.js (v14+)
- MongoDB (running locally or MongoDB Atlas)

## Setup Instructions

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Update `.env` file with your MongoDB URI:
```
MONGO_URI=mongodb://localhost:27017/youtube-clone
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

4. Start the backend server:
```bash
npm run dev
```

Backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React app:
```bash
npm start
```

Frontend will run on http://localhost:3000

## Usage

1. Register a new account
2. Login with your credentials
3. Upload videos from the Upload page
4. Browse videos on the home page
5. Click on a video to watch, like, and comment

## Project Structure

```
youtube-clone/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── uploads/         # Uploaded videos
│   └── server.js        # Express server
└── frontend/
    ├── src/
    │   ├── components/  # React components
    │   ├── pages/       # Page components
    │   └── App.js       # Main app component
    └── public/
```

## API Endpoints

### Auth
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Videos
- GET `/api/videos` - Get all videos
- GET `/api/videos/:id` - Get single video
- POST `/api/videos` - Upload video (auth required)
- POST `/api/videos/:id/like` - Like/unlike video (auth required)
- DELETE `/api/videos/:id` - Delete video (auth required)

### Comments
- GET `/api/comments/:videoId` - Get video comments
- POST `/api/comments` - Add comment (auth required)
