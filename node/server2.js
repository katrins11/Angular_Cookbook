var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var message = [{chatText: 'text', chatOwnerName: 'jon'}, {chatText: 'another text', chatOwnerName: 'anna'}];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();

api.get('/messages', (req, res)=>{
    res.json(message);
})

api.post('/messages', (req, res)=>{
    console.log(req.body);
    message.push(req.body);
    // res.sendStatus(200);
    res.json(req.body);

})

app.use('/api', api);
//Listening to port
var port = 1983;
app.listen(port, err => {
    if(err) {
        console.log("error");
        return;
    }
    console.log("server is running on port 1983");
})