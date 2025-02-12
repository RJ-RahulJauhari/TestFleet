import mongoose, { Schema } from "mongoose";

const ConfigSchema = new Schema(
    {
        deployment_id: {
            type: mongoose.Schema.Types.ObjectId, // Assuming deployment_id refers to a Deployment document
            ref: "Deployment", // Reference to the Deployment model
            required: true, // Ensuring this field is always provided
            index: true // Optional, but may improve query performance if frequently accessed
        },
        config_name: {
            type: String,
            required: [true, "Please provide the configuration name."],
            trim: true, // Trims any extra spaces around the config name
        },
        start_timestamp: {
            type: Date,
            required: [false, "Please provide the start timestamp."], // Optional
        },
        end_timestamp: {
            type: Date,
            required: [false, "Please provide the end timestamp."], // Optional
        },
        frequency: {
            type: Number,
            required: [false, "Please specify the frequency."], // Optional
            min: [0, "Frequency cannot be negative."]
        },
        interval: {
            type: Number,
            required: [false, "Please specify the interval."], // Optional
            min: [0, "Interval cannot be negative."]
        }
    },
    {
        timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
    }
);

const ConfigModel = mongoose.model("Config", ConfigSchema);

export default ConfigModel;
