import ConfigModel from "../models/config.model.js";
// CREATE - Add a new configuration
export const createConfig = async (req, res) => {
    try {
        const newConfig = new ConfigModel(req.body);
        await newConfig.save();
        return res.status(201).json({ message: "Configuration created successfully", data: newConfig });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error creating configuration", error: err.message });
    }
};

// READ - Get a specific configuration by deployment_id
export const getConfigByDeploymentId = async (req, res) => {
    try {
        const config = await ConfigModel.findOne({ deployment_id: req.params.deployment_id });
        if (!config) {
            return res.status(404).json({ message: "Configuration not found" });
        }
        return res.status(200).json({ data: config });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving configuration", error: err.message });
    }
};

// READ - Get all configurations (optional filtering based on queries)
export const getAllConfigs = async (req, res) => {
    try {
        const configs = await ConfigModel.find();
        return res.status(200).json({ data: configs });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving configurations", error: err.message });
    }
};

// UPDATE - Update an existing configuration by config_id
export const updateConfig = async (req, res) => {
    try {
        const { config_id } = req.params;
        const updatedConfig = await ConfigModel.findByIdAndUpdate(config_id, req.body, { new: true, runValidators: true });

        if (!updatedConfig) {
            return res.status(404).json({ message: "Configuration not found" });
        }
        return res.status(200).json({ message: "Configuration updated successfully", data: updatedConfig });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error updating configuration", error: err.message });
    }
};

// DELETE - Delete a configuration by config_id
export const deleteConfig = async (req, res) => {
    try {
        const { config_id } = req.params;
        const deletedConfig = await ConfigModel.findByIdAndDelete(config_id);

        if (!deletedConfig) {
            return res.status(404).json({ message: "Configuration not found" });
        }
        return res.status(200).json({ message: "Configuration deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error deleting configuration", error: err.message });
    }
};
