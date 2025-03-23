import { useState } from 'react';
import teamData from '../../server/team.json';
import { MemberCard } from '../../components';
import { useFetchTeamData } from '../../hooks';

export const MainPage = () => {
  const { team, isLoading, error } = useFetchTeamData(teamData);
  console.log(team);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites') || '[]')
  );
  console.log(favorites);

  const handleToggleFavorite = (member) => {
    const isFavorite = favorites.some((fav) => fav.id === member.id);

    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((fav) => fav.id !== member.id);
    } else {
      newFavorites = [...favorites, member];
    }

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl text-slate-600">{error.message}</h2>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] w-full m-auto p-4 sm:px-6">
      <h1 className="text-4xl text-center font-bold mb-4">О нашей команде</h1>
      <div className="text-2xl text-center italic text-gray-400">
        Мы — студенты Result University. <br /> Наша команда состоит из специалистов,
        которые постоянно развиваются и улучшают свои навыки.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {team.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            toggleFavorite={handleToggleFavorite}
            favorites={favorites}
            isFavoritePage={false}
          />
        ))}
      </div>
    </div>
  );
};
