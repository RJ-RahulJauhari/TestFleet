import express from "express";
import {
    createAgentServer,
    getAllAgentServers,
    getAgentServerByClientId,
    updateAgentServer,
    deleteAgentServer
} from "../controllers/AgentServerController.js";

const AgentServerRouter = express.Router();

// Routes for agent server operations
AgentServerRouter.post("/", createAgentServer);  // Create a new agent server
AgentServerRouter.get("/", getAllAgentServers);  // Get all agent servers
AgentServerRouter.get("/:client_id", getAgentServerByClientId);  // Get an agent server by client_id
AgentServerRouter.put("/:client_id", updateAgentServer);  // Update an agent server by client_id
AgentServerRouter.delete("/:client_id", deleteAgentServer);  // Delete an agent server by client_id

export default AgentServerRouter;
