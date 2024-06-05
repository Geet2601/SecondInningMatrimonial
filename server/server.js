require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const authRoute = require("./router/auth-router");
const preferenceRoute = require("./router/preference-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const matchRoute = require("./router/match-router");
const Preference = require("./models/preference-model")

const corsOptions = {
    origin:"http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
};
 

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", preferenceRoute)
app.get("/api/match", matchRoute);
// app.get("/", (req, res) => {
//     res.status(200).send("car car car");
// } );
// app.get("/register", (req,res) => {
//     res.status(200).send("reeegisterationn");
// });

app.use(errorMiddleware);

const PORT = 5000;
connectDb()
.then(() => {
app.listen(PORT, ()=>{
    console.log(`server is running at port: ${PORT}`);
});
});                                        
     
app.get('/user', async (req,res) => {
    const client = newMongoClient(uri)
    const userId = req.params.userId

try {
    await client.connect()
    const database = client.db('app-data')
    const users = database.collection('users')
    const query = {user_id: userId}
    const user =  await users.findOne(query)

    res.send(user)
} finally {
    await client.close()
}
})


             
                                       
      
                
                    
                   
       
      

      
                  
   
   
   
   
   