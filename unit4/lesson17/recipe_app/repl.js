const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
mongoose.connect(
    "mongodb://0.0.0.0:27017/recipe_db",
    { useNewUrlParser: true }
);
//using promises we did in main.js
mongoose.Promise = global.Promise;

Subscriber.create({
    name: "Jon",
    email: "jon@jonwexler.com",
    zipCode: "12345"
})
    .then(subscriber => console.log(subscriber))
    .catch(error => console.log(error.message));

let subscriber;
Subscriber.findOne({
    name: "Jon"
}).then(result => {
    subscriber = result;
    console.log(subscriber.getInfo());
});



///// Courses//////

//creating course
const Course = require("./models/course");
var testCourse, testSubscriber;
Course.create({
    title: "Tomato Land",
    description: "Locally farmed tomatoes only",
    zipCode: 12345,
    items: ["cherry", "heirloom"]
}).then(course => testCourse = course);

//find subscriber
Subscriber.findOne({}).then(
    subscriber => testSubscriber = subscriber
);

//add course id subsriber
testSubscriber.courses.push(testCourse._id);

//save subscriber
testSubscriber.save();

//populate subscriber's course array with the course they are enrolled in
Subscriber.populate(testSubscriber, "courses").then(subscriber =>
    console.log(subscriber)
);


