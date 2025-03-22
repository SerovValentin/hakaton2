import { useParams } from 'react-router';
import teamData from '../../server/team.json';
import { useState, useEffect } from 'react';
import { ProgressBar } from '../../components/progress-bar/progress-bar';
import { teamImages } from '../../assets/images';

export const TeamMemberPage = () => {
	const { id } = useParams();
	const [member, setMember] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const loadMember = async () => {
			setIsLoading(true);
			await new Promise(resolve => setTimeout(resolve, 500));

			const foundMember = teamData.team.find(m => m.id === Number(id));
			setMember(foundMember);

			const favorites = JSON.parse(
				localStorage.getItem('favorites') || '[]',
			);
			setIsFavorite(favorites.includes(foundMember?.id));

			setIsLoading(false);
		};

		loadMember();
	}, [id]);

	const handleFavoriteClick = () => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

		if (isFavorite) {
			const newFavorites = favorites.filter(favId => favId !== member.id);
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
			setIsFavorite(false);
		} else {
			favorites.push(member.id);
			localStorage.setItem('favorites', JSON.stringify(favorites));
			setIsFavorite(true);
		}
	};

	if (isLoading) {
		return (
			<div className='flex justify-center items-center min-h-screen'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-400'></div>
			</div>
		);
	}

	if (!member) {
		return (
			<div className='text-center py-10'>
				<h2 className='text-2xl text-slate-600'>Участник не найден</h2>
			</div>
		);
	}

	return (
		<div className='max-w-2xl mx-auto p-6'>
			<div className='bg-slate-50 shadow-sm rounded-lg overflow-hidden'>
				<img
					src={teamImages[member.image]}
					alt={`${member.name} ${member.surname}`}
					className='w-full h-80 object-cover'
				/>

				<div className='p-6'>
					<h1 className='text-3xl font-bold mb-4 text-slate-800'>
						{member.name} {member.surname}
					</h1>

					<div className='mb-4'>
						<p className='text-slate-600'>
							Возраст: {member.age} лет
						</p>
						<p className='text-slate-600'>
							Роль: {member.position}
						</p>
					</div>

					<div className='mb-6'>
						<p className='text-slate-600'>{member.info}</p>
					</div>

					{member.contribution && (
						<div className='mb-6'>
							<h2 className='font-semibold mb-2 text-slate-800'>
								Вклад в проект
							</h2>
							<p className='text-slate-600'>
								{member.contribution}
							</p>
						</div>
					)}

					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-3 text-slate-800'>
							Навыки
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<ProgressBar
								label='HTML'
								value={member.HTML}
								color='bg-rose-200'
								type='bar'
							/>
							<ProgressBar
								label='CSS'
								value={member.CSS}
								color='bg-sky-200'
								type='bar'
							/>
							<ProgressBar
								label='JS'
								value={member.JS}
								color='bg-amber-200'
								type='bar'
							/>
							<ProgressBar
								label='React'
								value={member.React}
								color='bg-teal-200'
								type='bar'
							/>
						</div>
					</div>

					<div className='flex justify-between'>
						<a
							href={member['social-info']}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-2 px-4 rounded transition-colors'>
							Связаться
						</a>
						<button
							onClick={handleFavoriteClick}
							className={`inline-block ${
								isFavorite
									? 'bg-rose-200 hover:bg-rose-300 text-rose-700'
									: 'bg-emerald-200 hover:bg-emerald-300 text-emerald-700'
							} font-medium py-2 px-4 rounded transition-colors`}>
							{isFavorite
								? 'Удалить из избранного'
								: 'В избранное'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
