if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require('express');
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");
const app = express();
const usersController = require('./controllers/usersController');
const cookieParser = require('cookie-parser');
const requireAuth = require('./middleware/requireAuth');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true,
}));

connectToDb();

app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get("/check-auth", requireAuth, usersController.checkAuth);

app.post('/notes', notesController.createNote);
app.get('/notes/:id', notesController.fetchNote);
app.get('/notes', notesController.fetchNotes);
app.put('/notes/:id', notesController.updateNote);
app.delete('/notes/:id', notesController.deleteNote);

app.listen(process.env.PORT);