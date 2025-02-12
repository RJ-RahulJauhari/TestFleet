import ScriptModel from "../models/script.model.js"

// Create a new script
const createScript = async (req, res) => {
    try {
        const { script_name, size, window_url, linux_url, mac_url } = req.body;

        const newScript = new ScriptModel({
            script_name,
            size,
            window_url,
            linux_url,
            mac_url
        });

        const savedScript = await newScript.save();
        res.status(201).json({
            message: "Script created successfully!",
            script: savedScript
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create script.", error });
    }
};

// Get all scripts
const getAllScripts = async (req, res) => {
    try {
        const scripts = await ScriptModel.find();
        res.status(200).json({
            message: "Scripts retrieved successfully.",
            scripts
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve scripts.", error });
    }
};

// Get a script by its ID
const getScriptById = async (req, res) => {
    try {
        const { id } = req.params;
        const script = await ScriptModel.findById(id);

        if (!script) {
            return res.status(404).json({ message: "Script not found." });
        }

        res.status(200).json({
            message: "Script retrieved successfully.",
            script
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve script.", error });
    }
};

// Update a script by its ID
const updateScript = async (req, res) => {
    try {
        const { id } = req.params;
        const { script_name, size, window_url, linux_url, mac_url } = req.body;

        const updatedScript = await ScriptModel.findByIdAndUpdate(
            id,
            { script_name, size, window_url, linux_url, mac_url },
            { new: true, runValidators: true }
        );

        if (!updatedScript) {
            return res.status(404).json({ message: "Script not found." });
        }

        res.status(200).json({
            message: "Script updated successfully.",
            script: updatedScript
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update script.", error });
    }
};

// Delete a script by its ID
const deleteScript = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedScript = await ScriptModel.findByIdAndDelete(id);

        if (!deletedScript) {
            return res.status(404).json({ message: "Script not found." });
        }

        res.status(200).json({
            message: "Script deleted successfully.",
            script: deletedScript
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete script.", error });
    }
};

// Export the controller functions
export {
    createScript,
    getAllScripts,
    getScriptById,
    updateScript,
    deleteScript
};
