import mongoose from "mongoose";

const AgentServerSchema = new mongoose.Schema(
    {
        client_id: {
            type: String,
            unique: true,
            required: true,
            index: true // Adding index for faster lookups
        },
        socket_id: {
            type: String,
            unique: true,
            required: true,
            index: true
        },
        client_name: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            enum: ["idle", "waiting", "deploying"],
            default: "idle"
        },
        isOnline: {
            type: Boolean,
            default: false
        },
        cpu_count: {
            type: Number,
            default: 1,
            min: 1 // Ensuring at least 1 core
        },
        ram: {
            type: Number,
            default: 2,
            min: 1 // Avoiding 0 or negative values
        },
        storage: {
            type: Number,
            default: 4,
            min: 1
        },
        host: {
            type: String,
            required: true,
            trim: true
        },
        script_executed_success: {
            type: Number,
            default: 0,
            min: 0
        },
        script_executed_failed: {
            type: Number,
            default: 0,
            min: 0
        },
        last_seen: {
            type: Date,
            default: Date.now // Automatically sets last seen
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        ip_address: {
            type: String,
            required: true,
            trim: true,
            index: true // IP lookups may benefit from indexing
        },
        current_jobs: {
            type: [String],
            default: [] // Defaulting to empty array
        },
        agent_type: {
            type: String,
            required: true,
            enum: ["windows", "linux", "mac"]
        }
    },
    {
        timestamps: true
    }
);

const AgentServerModel = mongoose.model("AgentServer", AgentServerSchema);

export default AgentServerModel;
