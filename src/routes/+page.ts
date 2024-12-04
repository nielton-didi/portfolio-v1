import { SystemConstant } from '$lib/constant/system.constant.dto';
import type { ExperienceDTO } from '$lib/dto/system.dto';

export async function load() {
	const experience: ExperienceDTO[] = SystemConstant.experience;

	return {
		experience
	};
}
