require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const taskRouter = require("./routes/taskRouters") 
const app = express()
app.use(cors())


const port = process.env.PORT || 5000;
// Middleware
app.use(express.json())
// DB  Connection 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected successfully")
})
.catch((error) => {
  console.log("Error connecting to DB:", error);
});

app.use(taskRouter)
app.listen(port ,()=>{
    console.log("serer running on port " + port);
    
} )
