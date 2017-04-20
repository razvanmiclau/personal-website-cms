var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

// Models
import Project from './models/project';
import { getProjects, getProject, postProject, deleteProject } from './client/routes/project';

// DB URI
const DB_URI = 'mongodb://test-user:password123@ds157500.mlab.com:57500/personalweb_db';

var app = express();
app.set('port', (process.env.PORT || 5000));

// DB connection
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

// Body Parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Where to find static assets
app.use(express.static(__dirname + '/public'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});

// Routes
app.route('/admin/projects')
   .post(postProject)
   .get(getProjects);
app.route('/admin/projects/:id')
   .get(getProject)
   .delete(deleteProject);

app.route("*").get(function(req, res){
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'));
});
