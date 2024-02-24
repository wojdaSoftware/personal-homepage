import { useEffect, useState } from "react";

const githubAPI = "https://api.github.com/users/wojdaSoftware/repos";

const useProjectsData = () => {
  const [projectsData, setProjectData] = useState({ status: "pending", data: null });

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch(githubAPI);

        if (!response.ok) {
          throw new Error();
        }

        const parsedResponse = await response.json();

        setProjectData({
          status: "success",
          data: parsedResponse,
        })

      } catch (error) {
        setProjectData({ status: "error" })
      }
    }, 2000);
  }, [])

  return { projectsData };
};

export default useProjectsData;