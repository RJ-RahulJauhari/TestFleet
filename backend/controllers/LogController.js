import LogModel from "../models/log.model.js";

// CREATE - Add a new log entry
export const createLog = async (req, res) => {
    try {
        const newLog = new LogModel(req.body); // Creating a new Log entry with data from request body
        await newLog.save(); // Save the log to the database
        return res.status(201).json({ message: "Log created successfully", data: newLog });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error creating log", error: err.message });
    }
};

// READ - Get a specific log entry by log_id
export const getLogById = async (req, res) => {
    try {
        const log = await LogModel.findById(req.params.log_id); // Find a log by its ID
        if (!log) {
            return res.status(404).json({ message: "Log not found" }); // If log is not found, return 404
        }
        return res.status(200).json({ data: log });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving log", error: err.message });
    }
};

// READ - Get all logs
export const getAllLogs = async (req, res) => {
    try {
        const logs = await LogModel.find(); // Fetch all logs from the database
        return res.status(200).json({ data: logs });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving logs", error: err.message });
    }
};

// UPDATE - Update an existing log entry by log_id
export const updateLog = async (req, res) => {
    try {
        const { log_id } = req.params;
        const updatedLog = await LogModel.findByIdAndUpdate(log_id, req.body, { new: true, runValidators: true }); // Update log by ID

        if (!updatedLog) {
            return res.status(404).json({ message: "Log not found" }); // If log is not found, return 404
        }
        return res.status(200).json({ message: "Log updated successfully", data: updatedLog });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error updating log", error: err.message });
    }
};

// DELETE - Delete a log entry by log_id
export const deleteLog = async (req, res) => {
    try {
        const { log_id } = req.params;
        const deletedLog = await LogModel.findByIdAndDelete(log_id); // Delete log by ID

        if (!deletedLog) {
            return res.status(404).json({ message: "Log not found" }); // If log is not found, return 404
        }
        return res.status(200).json({ message: "Log deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error deleting log", error: err.message });
    }
};
