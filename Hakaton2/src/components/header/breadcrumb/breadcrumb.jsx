import { Link, useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

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

          const isTeamMember = pathname === "team-member";
          const isLastItem = index === pathnames.length - 1;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              <Link to={routePath} className="text-white hover:underline">
                {isTeamMember && !isLastItem
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
