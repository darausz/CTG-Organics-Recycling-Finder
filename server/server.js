const express= require('express')
const bodyParser = require('body-parser');
const app= express();
app.use(express.json());
app.use(bodyParser.json());

const sequelize = require('./config/db'); // Adjust the path as needed
const stateRouter=require('./routes/stateroute')

const db = require('./models');


 
db.sequelize.sync({ force: false }) // Sync database
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Unable to create database:', err);
  });


app.get("/",(req,res)=>{
    res.send('Commit to Green Backennnd screen')
});

app.use('/state',stateRouter)

app.listen(5000,()=> {console.log("server started on port 5000")})