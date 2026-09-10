/*
  Theme ids must match the DaisyUI theme names in tailwind.config.js.
  To add a theme: define it there, then add a row here for the switcher.
*/
export const DEFAULT_THEME = "nightfall";
export const THEME_STORAGE_KEY = "pratibimb-theme";

export const themes = [
  {
    id: "nightfall",
    label: "Night",
    description: "Dark cover tones, violet on black.",
  },
  {
    id: "lumen",
    label: "Day",
    description: "Light paper with violet type.",
  },
  {
    id: "folio",
    label: "Folio",
    description: "Warm editorial print tones.",
  },
  {
    id: "contrast",
    label: "Contrast",
    description: "High-contrast reading mode.",
  },
];
