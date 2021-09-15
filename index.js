console.log('yy');  
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })) 

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/webhook', (req, res) => {
    res.render('webhook.ejs');
})
app.post('/webhook', (req, res) => {
    console.log(req.body)
    res.send('Something else from request')
})

app.listen(80, () => {
    console.log("LISTENING ON PORT 80")
})
 
