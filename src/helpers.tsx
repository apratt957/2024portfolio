export const getRandom = () => Math.ceil((Math.random() - 0.5) * 2 * 300);

export const findCurrentProject = (
  projectTitle: string,
  projects: Array<Object>
) =>
  projects.filter(
    (project: object) => (project as { title: string }).title === projectTitle
  )[0];

export const colors = {
  blue: "#146cc4",
  red: "#e31305",
  darkBlue: "#011936",
  green: "#295135",
  pink: "#ba3856",
};
