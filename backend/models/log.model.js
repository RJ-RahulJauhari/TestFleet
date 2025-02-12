import mongoose, { Schema } from "mongoose";

const LogSchema = new Schema(
    {
        log_type: {
            type: String,
            enum: ["script", "job", "task", "deployment", "config", "server", "default", "connection", "socket", "error", "success", "disconnection"],
            default: "default"
        },
        fun_id: {
            type: mongoose.Schema.Types.ObjectId,  // Use ObjectId for references
            required: true,
        },
        log_message: {
            type: String,
            required: true
        },
        log_data: {
            type: mongoose.Schema.Types.Mixed,
            default: {}
        }
    },
    {
        timestamps: true,
    }
);

const LogModel = mongoose.model("Log", LogSchema);

export default LogModel;
