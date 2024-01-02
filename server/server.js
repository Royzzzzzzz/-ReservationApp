// server.js
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// MongoDB 연결
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('MongoDB Connection Error:', err);
});

// 모델 정의
const Topic = mongoose.model('Topic', new mongoose.Schema({
    title: String
}));

// 라우트 정의
// app.get('/topics', async (req, res) => {
//     const topics = await Topic.find();
//     res.json(topics);
// });

// 서버 실행
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});