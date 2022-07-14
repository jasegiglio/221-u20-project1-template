let NasaItem = require('../model/NasaItem')

let NasaItems = [];

let storyOne = NasaItem.createNasaItem("Space", "Space", "https://www.vox.com/science-and-health/2022/7/12/23205256/james-webb-space-telescope-first-images-significance-nasa-jwst", "https://cdn.vox-cdn.com/thumbor/2w-iZk3wZX9kIKGiVHL_dxCE3WU=/0x0:2048x1186/1820x1024/filters:focal(861x430:1187x756):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71100133/web_first_images_release.0.png");
let storyTwo = NasaItem.createNasaItem("Flight Path", "Flight", "https://www.grc.nasa.gov/www/k-12/rocket/rktrflght.html", "https://www.grc.nasa.gov/www/k-12/rocket/Images/rktrflght.gif");
let storyThree= NasaItem.createNasaItem("High in The Sky", "Sky", "https://www.cnet.com/culture/viewing-a-space-shuttle-launch-from-high-in-the-sky/", "https://img.freepik.com/free-photo/launch-space-shuttle-against-background-sky-smoke-elements-this-image-furnished-by-nasa-high-quality-photo_496756-4112.jpg?w=360");

NasaItems.push(storyOne);
NasaItems.push(storyTwo);
NasaItems.push(storyThree);


exports.getNasaItems = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(NasaItems);
}

exports.saveNasaItem = function(req, res) {
    let newNasaItem = NasaItem.createNasaItem(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
    NasaItems.push(newNasaItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(NasaItems);
}

exports.getNasaItem = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
  res.send(NasaItems[req.params.NasaItemId]);
}

exports.deleteNasaItem = function(req, res) {
    NasaItems.splice(req.params.NasaItemId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(NasaItems);
}


exports.updateNasaItem = function(req, res) {
    // get the existing NasaItem from the array
    var updatedNasaItem = NasaItems[req.params.NasaItemId];

    // check to see what has been passed and update the local copy
    console.log(req.body.firstName);
    if(req.body.firstName)

        updatedNasaItem.firstName = req.body.firstName;
    if(req.body.lastName)
        updatedNasaItem.lastName = req.body.lastName;
    if(req.body.email)
        updatedNasaItem.email = req.body.email;
    if(req.body.password)
        updatedNasaItem.password = req.body.password;

    // save the local copy of the user back into the array
    NasaItems[req.params.NasaItemId] = updatedNasaItem;

    res.setHeader('Content-Type', 'application/json');
    res.send(NasaItems[req.params.NasaItemId]); 
}