import mongoose from "mongoose";

const ScriptSchema = new mongoose.Schema(
    {
        script_name: {
            type: String,
            required: [true, "Please enter the script name."]
        },
        description: {
            type: String,
            required: false
        },
        application: {
            type: String,
            required: [true, "Please enter the name of the application the script is for."]
        },
        application_type: {
            type: String,
            enum: ["web", "desktop"],
            required: [true, "Enter the type of the application"]
        },
        size: {
            type: Number,
            required: [true, "Please provide the script size."],
            default: 0,
            min: [0, "Script size cannot be negative."]
        },
        window_url: {
            type: String,
            required: [true, "Windows script URL is required."],
            match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please enter a valid URL."]
        },
        linux_url: {
            type: String,
            required: false,
            match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please enter a valid URL."]
        },
        mac_url: {
            type: String,
            required: false,
            match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please enter a valid URL."]
        },
        total_executions: {
            type: Number,
            required: true,
            default: 0
        },
        upload_status: {
            type: String,
            required: true,
            default: "Not Uploaded Yet",
            enum: ["Not Uploaded Yet", "Upload Failed", "Successfully Uploaded"]
        }
    },
    {
        timestamps: true
    }
);

const ScriptModel = mongoose.model("Script", ScriptSchema);

export default ScriptModel;
