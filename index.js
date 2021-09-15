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

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
 
