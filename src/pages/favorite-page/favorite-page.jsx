import { useState } from 'react';
import { MemberCard } from '../../components';

export const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const handleRemoveFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="max-w-[1000px] w-full m-auto mt-25 p-4 sm:px-6">
      <h1 className="text-4xl text-center font-bold mb-4">Избранное</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {favorites.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              favorites={favorites}
              isFavoritePage={true}
              onRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ))}
        </div>
      ) : (
        <div className="text-2xl text-center italic text-gray-400">
          Избранные пока не объявились, но Морфиус и Тринити уже ищут их.
        </div>
      )}
    </div>
  );
};
