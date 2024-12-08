import { SystemConstant } from '$lib/constant/system.constant.dto';
import type { ExperienceDTO, ProjectDTO } from '$lib/dto/system.dto';

export async function load() {
	const experience: ExperienceDTO[] = SystemConstant.experience;
    const projects: ProjectDTO[] = SystemConstant.projects;

	return {
		experience,
        projects
	};
}
