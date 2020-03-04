// server.js -- A simple Express.js web server for serving a React.js app
import path from 'path';
import express from 'express';
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')))