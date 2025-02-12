import DeploymentModel from "../models/deployment.model.js";

// CREATE - Add a new deployment
export const createDeployment = async (req, res) => {
    try {
        const newDeployment = new DeploymentModel(req.body); // Creating a new Deployment entry with data from request body
        await newDeployment.save(); // Save the deployment to the database
        return res.status(201).json({ message: "Deployment created successfully", data: newDeployment });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error creating deployment", error: err.message });
    }
};

// READ - Get a specific deployment by deployment_id
export const getDeploymentById = async (req, res) => {
    try {
        const deployment = await DeploymentModel.findById(req.params.deployment_id); // Find a deployment by its ID
        if (!deployment) {
            return res.status(404).json({ message: "Deployment not found" }); // If deployment is not found, return 404
        }
        return res.status(200).json({ data: deployment });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving deployment", error: err.message });
    }
};

// READ - Get all deployments
export const getAllDeployments = async (req, res) => {
    try {
        const deployments = await DeploymentModel.find(); // Fetch all deployments from the database
        return res.status(200).json({ data: deployments });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving deployments", error: err.message });
    }
};

// UPDATE - Update an existing deployment by deployment_id
export const updateDeployment = async (req, res) => {
    try {
        const { deployment_id } = req.params;
        const updatedDeployment = await DeploymentModel.findByIdAndUpdate(deployment_id, req.body, { new: true, runValidators: true }); // Update deployment by ID

        if (!updatedDeployment) {
            return res.status(404).json({ message: "Deployment not found" }); // If deployment is not found, return 404
        }
        return res.status(200).json({ message: "Deployment updated successfully", data: updatedDeployment });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error updating deployment", error: err.message });
    }
};

// DELETE - Delete a deployment entry by deployment_id
export const deleteDeployment = async (req, res) => {
    try {
        const { deployment_id } = req.params;
        const deletedDeployment = await DeploymentModel.findByIdAndDelete(deployment_id); // Delete deployment by ID

        if (!deletedDeployment) {
            return res.status(404).json({ message: "Deployment not found" }); // If deployment is not found, return 404
        }
        return res.status(200).json({ message: "Deployment deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error deleting deployment", error: err.message });
    }
};
