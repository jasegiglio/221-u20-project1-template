const express = require('express')
const bodyParser  = require('body-parser');
const feedController=require('./controller/feedController')
const app = express();


app.use(express.static('client/public'));

app.use(bodyParser.json({type: 'application/json'}));

app.route ('/api/feed')
    .get(feedController.getfeedItems)
    .post(feedController.savefeedItem)

app.route('/api/feed/:feedId')
    .get(feedController.getfeedItems) 
    .delete(feedController.deletefeedItem) 
    .patch(feedController.updatefeedItem)

app.get('/', function(req,res){
    res.sendFile('index.html', {root: './client/views'})
});
app.get('/feed', function(req,res) {
    res.sendFile('feed.html',{root:'./client/views'})
});
app.listen(1337,() => console.log('Listening on port 1337.'));