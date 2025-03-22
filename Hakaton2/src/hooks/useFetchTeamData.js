import { useEffect, useState } from 'react';

export const useFetchTeamData = (teamData) => {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (teamData.team) {
              resolve(teamData.team);
            } else {
              reject('Данные не обнаружены');
            }
          }, 1000);
        });
        setTeam(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [teamData]);

  return { team, isLoading, error };
};
