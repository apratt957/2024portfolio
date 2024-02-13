import { getRandom, colors } from "@/helpers";

export const work = [
  {
    title: "Keeping Time",
    description: "A pared down, no fuss pomodoro timer",
    xAnimate: getRandom(),
    yAnimate: getRandom(),
    backgroundColor: colors.red,
  },
  {
    title: "CareRing",
    description: "Connect with local volunteering opportunities",
    xAnimate: getRandom(),
    yAnimate: getRandom(),
    backgroundColor: colors.blue,
  },
  {
    title: "Procedural Jams",
    description: "Procedurally generated ambient music",
    xAnimate: getRandom(),
    yAnimate: getRandom(),
    backgroundColor: colors.green,
  },
];
