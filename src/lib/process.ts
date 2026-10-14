export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Idea", description: "Understand the concept." },
  {
    number: "02",
    title: "Concept",
    description: "Turn the idea into a visual direction.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Plan locations, scenes, production and creative requirements.",
  },
  { number: "04", title: "Production", description: "Film, direct and create." },
  {
    number: "05",
    title: "Post",
    description: "Edit, colour, sound and visual effects.",
  },
  {
    number: "06",
    title: "Release",
    description: "Prepare the final content for its intended platform.",
  },
];
