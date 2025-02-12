import JobModel from "../models/job.model.js"; // Import the Job model

// CREATE - Add a new job
export const createJob = async (req, res) => {
    try {
        const newJob = new JobModel(req.body);
        await newJob.save();
        return res.status(201).json({ message: "Job created successfully", data: newJob });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error creating job", error: err.message });
    }
};

// READ - Get a specific job by job_id
export const getJobById = async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.job_id)
            .populate("deployment_id task_id script_id server_id config_id"); // Populate references
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        return res.status(200).json({ data: job });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving job", error: err.message });
    }
};

// READ - Get all jobs (optional filtering based on queries)
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await JobModel.find()
            .populate("deployment_id task_id script_id server_id config_id"); // Populate references
        return res.status(200).json({ data: jobs });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error retrieving jobs", error: err.message });
    }
};

// UPDATE - Update an existing job by job_id
export const updateJob = async (req, res) => {
    try {
        const { job_id } = req.params;
        const updatedJob = await JobModel.findByIdAndUpdate(job_id, req.body, { new: true, runValidators: true });

        if (!updatedJob) {
            return res.status(404).json({ message: "Job not found" });
        }
        return res.status(200).json({ message: "Job updated successfully", data: updatedJob });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error updating job", error: err.message });
    }
};

// DELETE - Delete a job by job_id
export const deleteJob = async (req, res) => {
    try {
        const { job_id } = req.params;
        const deletedJob = await JobModel.findByIdAndDelete(job_id);

        if (!deletedJob) {
            return res.status(404).json({ message: "Job not found" });
        }
        return res.status(200).json({ message: "Job deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error deleting job", error: err.message });
    }
};
