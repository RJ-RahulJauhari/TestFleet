import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema(
    {
        task_name: {
            type: String,
            required: [true, "Please enter task name"],
        },
        task_description: {
            type: String,
            required: false,
        },
        deployments: {
            type: [String],
            required: false, // Fixed typo: `require` → `required`
            default: [],
        },
        task_status: {
            type: String,
            enum: ["draft", "active", "scheduled", "completed"],
            required: true,
            default: "draft",
        },
        deployment_count: {
            type: Number,
            default: 0,
        },
        count_of_scheduled_deployments: {
            type: Number,
            default: 0,
        },
        count_of_recurring_deployments: {
            type: Number,
            default: 0,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const TaskModel = mongoose.model("Task", TaskSchema); // Renamed to "Task" for convention

export default TaskModel;
