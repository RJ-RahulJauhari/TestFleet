import mongoose from "mongoose";

const DeploymentSchema = new mongoose.Schema(
    {
        deployment_name: {
            type: String,
            required: true,
            trim: true, // Ensuring no extra spaces
            index: true  // Indexing if frequently queried
        },
        scripts: {
            type: [String],
            required: true,
            default: []
        },
        servers: {
            type: [String],
            required: true,
            default: []
        },
        type: {
            type: String,
            required: true,
            enum: ["scheduled", "recurring"],
            default: "scheduled"
        },
        time_allocation_method: {
            type: String,
            required: true,
            enum: ["frequency", "interval"],
            default: "interval"
        },
        config_id: {
            type: String,
            required: true,
            index: true
        },
        total_jobs: {
            type: Number,
            default: 0,
            min: 0  // Prevents negative job count
        },
        completed_count: {
            type: Number,
            default: 0,
            min: 0
        },
        start_timestamp: {
            type: Date,
        },
        end_timestamp: {
            type: Date
        },
        frequency: {
            type: Number,
            default: 0,
            min: 0
        },
        interval: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

const DeploymentModel = mongoose.model("Deployment", DeploymentSchema);

export default DeploymentModel;
