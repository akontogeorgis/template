const bodyParser = require('body-parser');
const express = require('express');

const app = express();
var path = require('path');
const port = 3000

const { Client } = require('@elastic/elasticsearch/index')
const client = new Client({ node: 'http://localhost:9200', log: 'trace'})

/*
client.cluster.health({},function(err,resp,status) {
    console.log("-- Client Health --",resp);
});
*/

app.listen(port, () =>
	console.log(`Server listening on port ${port}!\n`)
);

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) =>{
	res.sendFile(path.join(__dirname + '/../src/assets/index.html'));
});

app.get('/a', (req, res) =>{
	res.json({ message: 'Hello' })
});
