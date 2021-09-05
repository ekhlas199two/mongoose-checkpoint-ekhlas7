const express= require ('express');
const connectDb= require('./config/connectDb');
const route = require('./routes/contact');
require('dotenv').config();


const app=express();
app.use(express.json())
const port=5000

connectDb()

app.get('/', (req,res)=>{
    res.send( 'working right')
});
app.use('/api/contacts',route)
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})