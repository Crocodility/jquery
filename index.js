const express = require ('express');
const app = express();

app.use(express.static('public'));

const jsonParser = express.json();
app.get("ajax_load.txt", function(req, res){
	var agent = req.headers["user-agent"];
	var check = agent.search('Mozilla');
	console.log(check);
	if(check != -1) {
		return res.sendStatus(400)} 
	else{
	res.sendFile(__dirname + "/index.html")}
    });
    
// app.get('/user', async (req, res) =>{
//     res.status(200).send('user get is delivered')
// });
// app.get('/user', async (req, res) =>{
//     res.status(200).send('user get is delivered')
// });

// app.post('/user', async (req, res) =>{
//     req.body.data
//     res.status(200).send('user post is delivered')
// });
app.listen(3000);