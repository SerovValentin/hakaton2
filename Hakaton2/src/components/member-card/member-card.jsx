import { teamImages } from "../../assets/images";
import { Button } from "../button/button";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";

export const MemberCard = ({
  member,
  toggleFavorite,
  favorites,
  isFavoritePage,
  onRemoveFromFavorites,
}) => {
  const isFavorite = favorites.some((fav) => fav.id === member.id);

  return (
    <div
      key={member.id}
      to={`/team-member/${member.id}`}
      className="block bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden relative"
    >
      {!isFavoritePage && (
        <button
          onClick={() => toggleFavorite(member)}
          className="group absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          aria-label={
            isFavorite ? "Удалить из избранного" : "Добавить в избранное"
          }
        >
          <span className="absolute hidden group-hover:block right-0 top-full mt-2 px-2 py-1 bg-slate-800 text-white text-sm rounded whitespace-nowrap">
            {isFavorite ? "Убрать из избранного" : "В избранное"}
          </span>
          {isFavorite ? (
            <AiFillStar className="w-6 h-6 text-amber-400" />
          ) : (
            <AiOutlineStar className="w-6 h-6 text-slate-600 hover:text-amber-400" />
          )}
        </button>
      )}
      <div>
        <img
          src={teamImages[member.image]}
          alt={`${member.name} ${member.surname}`}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-slate-800">
              {member.name} {member.surname}
            </h3>
            {member.position === "Тим-лид" && (
              <div className="group relative">
                <FaCrown className="w-5 h-5 text-amber-400" />
                <span className="absolute hidden group-hover:block left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-slate-800 text-white rounded whitespace-nowrap">
                  Тим-лид
                </span>
              </div>
            )}
          </div>
          <p className="text-slate-600 text-center mb-2">{member.position}</p>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {member.info}
          </p>
          {isFavoritePage ? (
            <div className="flex justify-around">
              <Button
                color="#e2e8f0"
                border={5}
                children="Убрать из избранного"
                onClick={() => onRemoveFromFavorites(member.id)}
              />
              <Button
                color="#e2e8f0"
                border={5}
                children="Открыть"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/team-member/${member.id}`;
                }}
              />
            </div>
          ) : (
            <div className="flex justify-center">
              <Button
                color="#e2e8f0"
                border={5}
                children="Открыть"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/team-member/${member.id}`;
                }}
                className="hover:bg-slate-700"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
