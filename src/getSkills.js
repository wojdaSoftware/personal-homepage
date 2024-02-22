export const getSkills = async () => {
  const response = await fetch("/personal-homepage/skills.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};