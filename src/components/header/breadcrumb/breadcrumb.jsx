import { Link, useLocation } from "react-router-dom";
import { useFetchTeamData } from "../../../hooks";
import teamData from "../../../server/team.json";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const { team, isLoading, error } = useFetchTeamData(teamData);

  const memberId = pathnames[pathnames.length - 1];
  const isNumeric = !isNaN(memberId);
  const currentMember = isNumeric
    ? team.find((member) => member.id === parseInt(memberId))
    : null;

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="text-white hover:underline">
            Главная
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routePath = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLastItem = index === pathnames.length - 1;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              <Link to={routePath} className="text-white hover:underline">
                {isLastItem && isNumeric && currentMember
                  ? `${currentMember.name} ${currentMember.surname}`
                  : pathname === "team-member"
                  ? "Участник команды"
                  : pathname === "favorite"
                  ? "Избранное"
                  : pathname}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
