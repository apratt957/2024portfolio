const getRandom = () => Math.ceil((Math.random() - 0.5) * 2 * 300);

export const work = [
  {
    title: "Keeping Time",
    description: "A pared down, no fuss pomodoro timer",
    xAnimate: getRandom(),
    yAnimate: getRandom(),
  },
  {
    title: "CareRing",
    description: "Connect with local volunteering opportunities",
    xAnimate: getRandom(),
    yAnimate: getRandom(),
  },
  {
    title: "Procedural Jams",
    description: "Procedurally generated ambient music",
    xAnimate: getRandom(),
    yAnimate: getRandom(),
  },
];
