const createJob = async (req, res) => {
	await res.send("createJob");
};

const getAllJobs = async (req, res) => {
	await res.send("getAllJobs");
};

const updateJob = async (req, res) => {
	await res.send("updateJob");
};

const deleteJob = async (req, res) => {
	await res.send("deleteJob");
};

const showStats = async (req, res) => {
	await res.send("showStats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
