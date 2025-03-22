import { Link } from 'react-router-dom';
import teamData from '../../server/team.json';
import { teamImages } from '../../assets/images';
import { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';

export const TeamList = () => {
	const [favorites, setFavorites] = useState(
		JSON.parse(localStorage.getItem('favorites') || '[]'),
	);

	const handleFavoriteClick = (e, memberId) => {
		e.preventDefault();
		const newFavorites = favorites.includes(memberId)
			? favorites.filter(id => id !== memberId)
			: [...favorites, memberId];

		localStorage.setItem('favorites', JSON.stringify(newFavorites));
		setFavorites(newFavorites);
	};

	return (
		<div className='max-w-[1000px] w-full mx-auto px-4 sm:px-6'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
				{teamData.team.map(member => (
					<Link
						key={member.id}
						to={`/team-member/${member.id}`}
						className='block bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden relative'>
						<button
							onClick={e => handleFavoriteClick(e, member.id)}
							className='group absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors'
							aria-label={
								favorites.includes(member.id)
									? 'Удалить из избранного'
									: 'Добавить в избранное'
							}>
							<span className='absolute hidden group-hover:block right-0 top-full mt-2 px-2 py-1 bg-slate-800 text-white text-sm rounded whitespace-nowrap'>
								{favorites.includes(member.id)
									? 'Убрать из избранного'
									: 'В избранное'}
							</span>
							{favorites.includes(member.id) ? (
								<AiFillStar className='w-6 h-6 text-amber-400' />
							) : (
								<AiOutlineStar className='w-6 h-6 text-slate-600 hover:text-amber-400' />
							)}
						</button>
						<div>
							<img
								src={teamImages[member.image]}
								alt={`${member.name} ${member.surname}`}
								className='w-full h-60 object-cover'
							/>
							<div className='p-4'>
								<div className='flex items-center justify-center gap-2 mb-2'>
									<h3 className='text-xl font-semibold text-slate-800'>
										{member.name} {member.surname}
									</h3>
									{member.position === 'Тим-лид' && (
										<div className='group relative'>
											<FaCrown className='w-5 h-5 text-amber-400' />
											<span className='absolute hidden group-hover:block left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-slate-800 text-white rounded whitespace-nowrap'>
												Тим-лид
											</span>
										</div>
									)}
								</div>
								<p className='text-slate-600 text-center mb-2'>
									{member.position}
								</p>
								<p className='text-slate-600 text-sm mb-4 line-clamp-2'>
									{member.info}
								</p>
								<div className='flex justify-center'>
									<button
										className='bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-2 px-8 rounded transition-colors'
										onClick={e => {
											e.preventDefault();
											window.location.href = `/team-member/${member.id}`;
										}}>
										Открыть
									</button>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
