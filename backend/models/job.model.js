import mongoose, { Schema } from "mongoose";

const JobSchema = new Schema(
    {
        deployment_id: {
            type: mongoose.Schema.Types.ObjectId, // Change from String to ObjectId
            ref: "Deployment",
            required: true
        },
        task_id: {
            type: mongoose.Schema.Types.ObjectId, // Change from String to ObjectId
            ref: "Task",
            required: true
        },
        script_id: {
            type: mongoose.Schema.Types.ObjectId, // Change from String to ObjectId
            ref: "Script",
            required: true
        },
        server_id: {
            type: mongoose.Schema.Types.ObjectId, // Change from String to ObjectId
            ref: "AgentServer",
            required: true
        },
        config_id: {
            type: mongoose.Schema.Types.ObjectId, // Change from String to ObjectId
            ref: "Config",
            required: true
        },
        task_name: {
            type: String,
            required: true
        },
        deployment_name: {
            type: String,
            required: true
        },
        job_status: {
            type: String,
            enum: ["deploying", "received", "downloading", "waiting", "executing", "completed"],
            required: true
        },
        job_run_count: {
            type: Number,
            default: 0
        },
        isCompleted: {
            type: Boolean,
            default: false
        },
        total_runs: {
            type: Number,
            default: 0
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        failure_count: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

const JobModel = mongoose.model("Job", JobSchema);

export default JobModel;
