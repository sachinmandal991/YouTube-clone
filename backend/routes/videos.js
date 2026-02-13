const express = require('express');
const multer = require('multer');
const Video = require('../models/Video');
const auth = require('../middleware/auth');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', auth, upload.single('video'), async (req, res) => {
  try {
    const video = new Video({
      title: req.body.title,
      description: req.body.description,
      videoUrl: req.file.path,
      user: req.userId
    });
    await video.save();
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().populate('user', 'username').sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('user', 'username');
    if (!video) return res.status(404).json({ message: 'Video not found' });
    video.views += 1;
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/:id/like', auth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    const index = video.likes.indexOf(req.userId);
    if (index === -1) {
      video.likes.push(req.userId);
    } else {
      video.likes.splice(index, 1);
    }
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (video.user.toString() !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await video.deleteOne();
    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
