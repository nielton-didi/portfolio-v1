export interface ExperienceDTO {
	startYear: string;
	endYear: string;
	position: string;
	companyName: string;
	jobDescription: string;
	skills: string[];
}

export interface ProjectDTO {
	title: string;
	description: string;
	imageUrl: string;
	skills: string[];
	redirectUrl: string;
}
