import express from "express";
import cors from "cors"
import http from "http"
import { Server } from "socket.io";
import { connectToDB } from "./db/db.js";

// Dot .env config initialization
import dotenv from "dotenv";
dotenv.config();

// Router Imports
import ScriptRouter from "./routers/ScriptRouter.js";
import AgentServerRouter from "./routers/AgentServerRouter.js";
import JobRouter from "./routers/JobRouter.js"
import LogRouter from "./routers/LogRouter.js"
import TaskRouter from "./routers/TaskRouter.js"
import DeploymentRouter from "./routers/DeploymentRouter.js"
import ConfigRouter from "./routers/ConfigRouter.js"


const PORT = 5000;

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);


// Middlewares
app.use(cors(
    {
        origin:["*"]
    }
))
app.use(express.urlencoded({extended:false}))
app.use(express.json());



io.on("connection",(socket) => {
    console.log("A user has connected to the default namespace...")
    console.log(socket.id);
})


app.use("/config",ConfigRouter)
app.use("/jobs",JobRouter)
app.use("/deployments",DeploymentRouter)
app.use("/tasks",TaskRouter)
app.use("/logs",LogRouter)
app.use("/agent-server",AgentServerRouter);
app.use("/scripts",ScriptRouter);
app.use("/", (req,res) => {
    res.json({"Welcome Message":"Server is running..."})
})



httpServer.listen(PORT, async () => {
    console.log(`HTTP Server has started on PORT: ${PORT}`)
    console.log(`URL: http://localhost:${PORT}`)
    await connectToDB()
})