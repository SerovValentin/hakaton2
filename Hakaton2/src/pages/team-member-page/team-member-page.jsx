import teamData from "../../server/team.json";
import { useState } from "react";

export const TeamMemberPage = () => {
  const [data, setData] = useState(teamData.team);

  return (
    <div>
      {data.map((member) => (
        <div key={member.id}>
          <h2>
            {member.name} {member.surname}
          </h2>
          <p>Возраст: {member.age}</p>
          <img src={member.image} alt={`Фото ${member.name}`} />
          <p>{member.info}</p>
          <a href={member.socialInfo}>Социальные сети</a>
        </div>
      ))}
    </div>
  );
};
