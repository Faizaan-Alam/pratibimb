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
  {
    id: "ink",
    label: "Ink",
    description: "Navy pages with a cool blue accent.",
  },
  {
    id: "moss",
    label: "Moss",
    description: "Deep green with a leaf accent.",
  },
  {
    id: "rose",
    label: "Rose",
    description: "Blush paper and wine type.",
  },
  {
    id: "glacier",
    label: "Glacier",
    description: "Cool grey paper and steel blue.",
  },
];
