const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const { requireAuth, checkUser } = require('./middleware/auth');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())

// view engine
app.set('view engine', 'ejs');

// database connection
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017", {
  serverSelectionTimeoutMS: 5000
})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
// routes
//app.get('*', checkUser);
app.get('/', (req, res) => res.render('.\FrontEnd\views\index'));

//app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));

app.use(routes)

