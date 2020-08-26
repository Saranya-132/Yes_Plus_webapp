const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = 5000;

var admin = require("firebase-admin");

var serviceAccount = require("./ServiceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yesplus-webapp.firebaseio.com"
});

const db = admin.firestore();

const app = express();

const path = require("path");

var x=0;

const bodyParser = require('body-parser');
const { Http2ServerResponse } = require("http2");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var cors = require("cors");
var cors_options = {
  origin : '*',

}
app.use(cors(cors_options));

/*const usersRouter = require('./users');
console.log("Accessing users");
app.use('/users', usersRouter);*/

app.post('/add_user',(req, res) => {
    //Call this function when sign up happens
  const user_obj = req.body;
  const user_data = {
    user_name: user_obj.name,
    user_email: user_obj.email,
    user_password: user_obj.password,
    user_branch: user_obj.branch,
    user_phno: user_obj.phno,
    user_type: 0,
    user_join_year: user_obj.joinyear,
  };
  console.log(user_data);
  return db
    .collection("user_data")
    .doc(user_data.user_email)
    .set(user_data)
    .then(() => {
      console.log("new user added");
      res.send("200");
    })
    .catch(()=>{
      console.log("Unable to add user");
      res.send("404");
    });
});

const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = 5000;

var admin = require("firebase-admin");

var serviceAccount = require("./ServiceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yesplus-webapp.firebaseio.com"
});

const db = admin.firestore();

const app = express();

const path = require("path");

var x=0;

const bodyParser = require('body-parser');
const { Http2ServerResponse } = require("http2");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var cors = require("cors");
var cors_options = {
  origin : '*',

}
app.use(cors(cors_options));

/*const usersRouter = require('./users');
console.log("Accessing users");
app.use('/users', usersRouter);*/


app.post('/add_user',(req, res) => {
    //Call this function when sign up happens
  const user_obj = req.body;
  const user_data = {
    user_name: user_obj.name,
    user_email: user_obj.email,
    user_password: user_obj.password,
    user_branch: user_obj.branch,
    user_phno: user_obj.phno,
    user_type: 0,
    user_join_year: user_obj.joinyear,
  };
  console.log(user_data);
  return db
    .collection("user_data")
    .doc(user_data.user_email)
    .set(user_data)
    .then(() => {
      console.log("new user added");
      res.send("200");
    })
    .catch(()=>{
      console.log("Unable to add user");
      res.send("404");
    });
});

app.post('/data',(req, res) => {
  //function getuser(email) {
  //Call this to retrieve user password
  console.log("here");
  const user_obj = req.body;
  const user_data = {
    user_email: user_obj.email,
    user_password: user_obj.password
  };
  console.log(user_data);

  db.collection("user_data")
    .doc(user_data.user_email)
    .get()
<<<<<<< HEAD
    .then(function (user_data.user_email) {
      console.log("got data");
      console.log(user_data.data().password);
     return user_data.data().password;
=======
    .then(doc => {
      console.log(doc.data());  
      user_temp=doc.data();
      if(user_temp.user_password==user_data.user_password){
        res.send(user_temp);
      }
      else{
        res.send("Wrong password");
      }
      
>>>>>>> upstream/master
    })
    .catch((error) => {
      console.log(error);
      console.log("Couldn't get data");
      res.send('<h1>Couldnt get data</h1>');
    });
});
<<<<<<< HEAD
*/


//Change testimonial accordingly
app.post('/testimonial_add',(req, res) => {
      const user_obj = req.body;
      const user_data = {
        user_email: user_obj.email,
        user_faculty: user_obj.faculty,
        user_experience: user_obj.experience,
        user_date_course:user_obj.date_course,
    
      };
      console.log(user_data);
      return db
        .collection("testimonial_data")
        .doc(user_data.user_email)
        
        .set(user_data)
        .then(() => {
          console.log("new user added");
          res.send("200");
          //res.send("Api is working");
        })
        .catch(()=>{
          console.log("Unable to add user");
          res.send("404");
        });
        
    });

// Write a function to display all the testimonials

app.get('/display_testimonials',function(req,res){
  const user=req.body;
  user.find({},function(err,users){
    if(err){
      res.send('something went wrong');
    }
    res.json(user);
  });

});
=======


// Write a function to display all the testimonials
// 
app.get('/display_testimonial',(req,res)=>{
  var user_temp=[];
  return db
  .collection("testimonial_data")
  .get()
  .then(snap => {
      snap.forEach(doc => {
        console.log(doc.data());
        user_temp[x] = doc.data();
        x++;
         // console.log(doc.id);          
      });
      console.log(user_temp);
      res.send(user_temp);
  })
  .catch(()=>{
    console.log("Failed");
    res.send("404");
  });
});



// Write a function to display all the testimonials
// event add+display 
app.post('/add_event',(req, res) => {
  const event_obj = req.body;
  const event_data = {
    event_title: event_obj.title,
    event_description: event_obj.description,
    event_date: event_obj.date,
  };
  console.log(event_data);
  return db
    .collection("event_data")
    .doc(event_data.event_title)
    .set(event_data)
    .then(() => {
      console.log("new event added");
      res.send("200");
    })
    .catch(()=>{
      console.log("Unable to add event");
      res.send("404");
    });
});

>>>>>>> upstream/master

app.use((req, res, next) => {
  console.log("got req for " + req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Express server</h1></body</html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});