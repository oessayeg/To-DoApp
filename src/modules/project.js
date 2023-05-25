export default (name, description) =>
{
	let projectName;
	let projectDescription;
	let projectTasks = [];

	projectName = name;
	projectDescription = description;

	return {projectName, projectDescription};
}