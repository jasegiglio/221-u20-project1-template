
let feedItem = require('../model/feedItem')

let feedItems = [];

let storyOne = feedItem.createfeedItem("Space", "Space", "https://www.vox.com/science-and-health/2022/7/12/23205256/james-webb-space-telescope-first-images-significance-nasa-jwst", "https://cdn.vox-cdn.com/thumbor/2w-iZk3wZX9kIKGiVHL_dxCE3WU=/0x0:2048x1186/1820x1024/filters:focal(861x430:1187x756):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71100133/web_first_images_release.0.png");
let storyTwo = feedItem.createfeedItem("Flight Path", "Flight", "https://www.grc.nasa.gov/www/k-12/rocket/rktrflght.html", "https://www.grc.nasa.gov/www/k-12/rocket/Images/rktrflght.gif");
let storyThree= feedItem.createfeedItem("High in The Sky", "Sky", "https://www.cnet.com/culture/viewing-a-space-shuttle-launch-from-high-in-the-sky/", "https://img.freepik.com/free-photo/launch-space-shuttle-against-background-sky-smoke-elements-this-image-furnished-by-nasa-high-quality-photo_496756-4112.jpg?w=360");

feedItems.push(storyOne);
feedItems.push(storyTwo);
feedItems.push(storyThree);


exports.getfeedItems = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}

exports.savefeedItem = function(req, res) {
    let newfeedItem = feedItem.createfeedItem(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
    feedItems.push(newfeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}

exports.getfeedItem = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[req.params.feedItemId]);
}

exports.deletefeedItem = function(req, res) {
    feedItems.splice(req.params.feedItemId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}

exports.updatefeedItem = function(req, res) {
    // get the existing feedItem from the array
    var updatedfeedItem = feedItems[req.params.feedItemId];

    // check to see what has been passed and update the local copy
    console.log(req.body.firstName);
    if(req.body.firstName)

        updatedfeedItem.firstName = req.body.firstName;
    if(req.body.lastName)
        updatedfeedItem.lastName = req.body.lastName;
    if(req.body.email)
        updatedfeedItem.email = req.body.email;
    if(req.body.password)
        updatedfeedItem.password = req.body.password;

    // save the local copy of the user back into the array
    feedItems[req.params.feedItemId] = updatedfeedItem;

    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.feedItemId]); 
}