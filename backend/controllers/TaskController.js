import TaskModel from "../models/task.model.js";

// CREATE - Add a new task
export const createTask = async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);
        await newTask.save();
        return res.status(201).json({ message: "Task created successfully", data: newTask });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error creating task", error: err.message });
    }
};

// READ - Get a specific task by task_id
export const getTaskById = async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.task_id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json({ data: task });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving task", error: err.message });
    }
};

// READ - Get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        return res.status(200).json({ data: tasks });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving tasks", error: err.message });
    }
};

// UPDATE - Update an existing task by task_id
export const updateTask = async (req, res) => {
    try {
        const { task_id } = req.params;
        const updatedTask = await TaskModel.findByIdAndUpdate(task_id, req.body, { new: true, runValidators: true });

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json({ message: "Task updated successfully", data: updatedTask });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error updating task", error: err.message });
    }
};

// DELETE - Delete a task by task_id
export const deleteTask = async (req, res) => {
    try {
        const { task_id } = req.params;
        const deletedTask = await TaskModel.findByIdAndDelete(task_id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error deleting task", error: err.message });
    }
};
