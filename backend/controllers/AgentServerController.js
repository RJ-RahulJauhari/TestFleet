import AgentServerModel from "../models/agent_server.model.js";

// Create a new agent server
const createAgentServer = async (req, res) => {
    try {
        const { client_id, socket_id, client_name, status, isOnline, cpu_count, ram, storage_available, host, total_script_executed_success, total_script_executed_failed } = req.body;

        const newAgentServer = new AgentServerModel({
            client_id,
            socket_id,
            client_name,
            status,
            isOnline,
            cpu_count,
            ram,
            storage_available,
            host,
            total_script_executed_success,
            total_script_executed_failed
        });

        const savedAgentServer = await newAgentServer.save();
        res.status(201).json({
            message: "Agent Server created successfully!",
            agentServer: savedAgentServer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create agent server.", error });
    }
};

// Get all agent servers
const getAllAgentServers = async (req, res) => {
    try {
        const agentServers = await AgentServerModel.find();
        res.status(200).json({
            message: "Agent Servers retrieved successfully.",
            agentServers
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve agent servers.", error });
    }
};

// Get an agent server by its client_id
const getAgentServerByClientId = async (req, res) => {
    try {
        const { client_id } = req.params;
        const agentServer = await AgentServerModel.findOne({ client_id });

        if (!agentServer) {
            return res.status(404).json({ message: "Agent Server not found." });
        }

        res.status(200).json({
            message: "Agent Server retrieved successfully.",
            agentServer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve agent server.", error });
    }
};

// Update an agent server by client_id
const updateAgentServer = async (req, res) => {
    try {
        const { client_id } = req.params;
        const { socket_id, client_name, status, isOnline, cpu_count, ram, storage_available, host, total_script_executed_success, total_script_executed_failed } = req.body;

        const updatedAgentServer = await AgentServerModel.findOneAndUpdate(
            { client_id },
            { socket_id, client_name, status, isOnline, cpu_count, ram, storage_available, host, total_script_executed_success, total_script_executed_failed },
            { new: true, runValidators: true }
        );

        if (!updatedAgentServer) {
            return res.status(404).json({ message: "Agent Server not found." });
        }

        res.status(200).json({
            message: "Agent Server updated successfully.",
            agentServer: updatedAgentServer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update agent server.", error });
    }
};

// Delete an agent server by client_id
const deleteAgentServer = async (req, res) => {
    try {
        const { client_id } = req.params;

        const deletedAgentServer = await AgentServerModel.findOneAndDelete({ client_id });

        if (!deletedAgentServer) {
            return res.status(404).json({ message: "Agent Server not found." });
        }

        res.status(200).json({
            message: "Agent Server deleted successfully.",
            agentServer: deletedAgentServer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete agent server.", error });
    }
};

// Export the controller functions
export {
    createAgentServer,
    getAllAgentServers,
    getAgentServerByClientId,
    updateAgentServer,
    deleteAgentServer
};
