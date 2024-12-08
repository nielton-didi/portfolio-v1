import type { ExperienceDTO, ProjectDTO } from '$lib/dto/system.dto';

export class SystemConstant {
	public static experience: ExperienceDTO[] = [
		{
			startYear: 'Jun 2024',
			endYear: 'Present',
			position: 'Frontend Developer Team Lead',
			companyName: 'Impact Business Solutions',
			jobDescription:
				'Lead the design and development of user interfaces for web and mobile applications, ensuring seamless, responsive, and visually appealing experiences. Oversee frontend development processes, manage a team of developers, and ensure best practices in code quality, performance, and scalability. Balance managerial responsibilities, including task allocation, mentoring, and collaboration with cross-functional teams to deliver user-centric, high-quality solutions.',
			skills: ['Node Js', 'Svelte', 'Typescript', 'Tailwind', 'Next Js', 'React']
		},
		{
			startYear: 'Jul 2023',
			endYear: 'May 2024',
			position: 'Software Developer Team Lead',
			companyName: 'Impact Business Solutions',
			jobDescription:
				'Led a team of developers while continuing hands-on development for web and mobile platforms. Managed task distribution, code reviews, and cross-functional collaboration to ensure high-quality, scalable solutions. Led UI/UX design efforts to enhance user experiences while balancing leadership responsibilities with active involvement in development.',
			skills: ['Node Js', 'Svelte', 'Flutter', 'Dart', 'Typescript']
		},
		{
			startYear: 'Apr 2022',
			endYear: 'Jun 2023',
			position: 'Software Developer',
			companyName: 'Impact Business Solutions',
			jobDescription:
				'Developed full-stack web and mobile applications, working on both frontend and backend development, including API integrations. Designed user-friendly interfaces with a focus on UI/UX, ensuring seamless and intuitive experiences. Collaborated with cross-functional teams to deliver scalable, high-performance solutions while maintaining clean, efficient code.',
			skills: ['Node Js', 'Angular', 'Typescript', 'Tailwind', '.Net', 'Flutter', 'Dart', 'MSSql']
		},
		{
			startYear: 'Apr 2021',
			endYear: 'Mar 2022',
			position: 'Junior Software Developer',
			companyName: 'Data Solutions Sarawak',
			jobDescription:
				'Developed multiple full-stack web applications using .NET MVC to support company operations. Designed and implemented tools that streamlined workflows and improved efficiency in managing the company’s core product. Collaborated with teams to build scalable, user-friendly solutions that addressed operational needs and enhanced overall productivity.',
			skills: ['DotNet', 'ASPX', 'C#', 'Javascript', 'jQuery', 'MSSql', 'Bootstrap']
		},
		{
			startYear: 'Oct 2020',
			endYear: 'Mar 2022',
			position: 'Software Developer Intern',
			companyName: 'Data Solutions Sarawak',
			jobDescription:
				'Assisted in the development of full-stack web applications using .NET MVC, focusing on smaller-scale company operation tools. Contributed to designing and implementing features that streamlined internal processes, supporting the company’s main product. Collaborated with the development team to ensure functionality, quality, and performance of tools within a controlled, lower-stakes environment.',
			skills: ['DotNet', 'ASPX', 'C#', 'Javascript', 'MSSql', 'Bootstrap']
		}
	];

	public static projects: ProjectDTO[] = [
		{
			title: 'Smart Home Mobile',
			description: 'Control, automate, and monitor your smart home devices seamlessly from anywhere.',
			imageUrl: 'src/lib/assets/images/projects/project-1.png',
			redirectUrl: '',
			skills: ['Node Js', 'Svelte', 'Tailwind', 'Typescript']
		},
		{
			title: 'Impact Business Solutions Profile Website',
			description: 'Company profile website revamp in Svelte and Tailwind',
			imageUrl: 'src/lib/assets/images/projects/project-1.png',
			redirectUrl: '',
			skills: ['Node Js', 'Svelte', 'Tailwind', 'Typescript']
		},
		{
			title: 'Impact Business Solutions Profile Website',
			description: 'Company profile website revamp in Svelte and Tailwind',
			imageUrl: 'src/lib/assets/images/projects/project-1.png',
			redirectUrl: '',
			skills: ['Node Js', 'Svelte', 'Tailwind', 'Typescript']
		}
	];
}
