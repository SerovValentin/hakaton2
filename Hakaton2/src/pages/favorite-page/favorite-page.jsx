import { useEffect, useState } from 'react';
import { MemberCard } from '../../components';

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storeFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storeFavorites);
  }, []);

  const handleRemoveFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="max-w-[1000px] w-full sm:px-6">
      <h1 className="text-4xl text-center font-bold mb-4">Избранное</h1>
      <div className="flex flex-wrap">
        {favorites.map((member) => (
          /* TODO - заменить код ниже на компонент карточки */
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
                  onClick={() => handleRemoveFromFavorites(member.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Удалить из избранного
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
