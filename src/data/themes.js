/*
  Theme ids must match the DaisyUI theme names in tailwind.config.js.
  paper, ink, and accent are the small previews in the theme menu.
  To add a theme: define it in tailwind.config.js, then add a row here.
*/
export const DEFAULT_THEME = "nightfall";
export const THEME_STORAGE_KEY = "pratibimb-theme";

export const themes = [
  {
    id: "nightfall",
    label: "Night",
    description: "Dark cover tones, violet on black.",
    paper: "#0c0b10",
    ink: "#f3eee6",
    accent: "#c084fc",
  },
  {
    id: "lumen",
    label: "Day",
    description: "Light paper with violet type.",
    paper: "#fcfaf6",
    ink: "#16141c",
    accent: "#6b21a8",
  },
  {
    id: "folio",
    label: "Folio",
    description: "Warm editorial print tones.",
    paper: "#f3ebda",
    ink: "#1c140e",
    accent: "#5c2a5a",
  },
  {
    id: "contrast",
    label: "Contrast",
    description: "High-contrast reading mode.",
    paper: "#000000",
    ink: "#ffffff",
    accent: "#e9d5ff",
  },
  {
    id: "ink",
    label: "Ink",
    description: "Navy pages with a cool blue accent.",
    paper: "#071018",
    ink: "#e7eef4",
    accent: "#7dd3fc",
  },
  {
    id: "moss",
    label: "Moss",
    description: "Deep green with a leaf accent.",
    paper: "#0c1410",
    ink: "#e7f0e4",
    accent: "#86efac",
  },
  {
    id: "rose",
    label: "Rose",
    description: "Blush paper and wine type.",
    paper: "#fbf6f4",
    ink: "#2a1418",
    accent: "#9f1239",
  },
  {
    id: "glacier",
    label: "Glacier",
    description: "Cool grey paper and steel blue.",
    paper: "#f4f7f8",
    ink: "#102028",
    accent: "#0e7490",
  },
  {
    id: "retro",
    label: "Retro",
    description: "Aged paper, burnt orange, and a serif headline.",
    paper: "#f6ecd6",
    ink: "#2b1d12",
    accent: "#d4532b",
  },
];
