const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const taskRouter = require("./routes/taskRouters") 
const app = express()
app.use(cors())


const port = 5000;
// Middleware
app.use(express.json())
// DB  Connection 
mongoose.connect("mongodb+srv://zyadmostafa9011:v02bsM9uMfJMUnah@cluster0.viwqegk.mongodb.net/ToDoList?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected successfully")
})
.catch((error)=>{
    console.log("arror with connection with DB" , error);
})
app.use(taskRouter)
app.listen(port ,()=>{
    console.log("serer running on port " + port);
    
} )
