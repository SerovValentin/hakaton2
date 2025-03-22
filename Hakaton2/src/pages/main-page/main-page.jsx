import { useEffect, useState } from 'react';
import teamData from '../../server/team.json';

export const MainPage = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(teamData.team);
  }, []);

  const handleAddToFavorites = (member) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.id === member.id)) {
      favorites.push(member);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">О нашей команде</h1>
      <div className="text-2xl text-center italic text-gray-400">
        Мы — студенты Result University. <br /> Наша команда состоит из специалистов,
        которые постоянно развиваются и улучшают свои навыки.
      </div>
      <div>
        {/* TODO - заменить нижний код на компонент карточки */}
        {team.map((member) => (
          <div key={member.id} className="bg-white p-2 rounded-lg shadow-md">
            <img
              src={member.image}
              alt={`${member.name} ${member.surname}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">
                {member.name} {member.surname}
              </h2>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-gray-600">{member.age} лет</p>
              <p className="mt-2">{member.info}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleAddToFavorites(member)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Добавить в избранное
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
