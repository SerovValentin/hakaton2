import { Link } from 'react-router-dom';
import teamData from '../../server/team.json';
import { teamImages } from '../../assets/images';

export const TeamList = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
			{teamData.team.map(member => (
				<Link
					key={member.id}
					to={`/team-member/${member.id}`}
					className='block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden'>
					<div>
						<img
							src={teamImages[member.image]}
							alt={`${member.name} ${member.surname}`}
							className='w-full h-90 object-cover'
						/>
						<div className='p-4'>
							<h3 className='text-xl font-semibold text-center'>
								{member.name} {member.surname}
							</h3>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};
