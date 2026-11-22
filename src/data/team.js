/*
  Editors shown on the site.
  Photographs are copied from the members folder into public/assets/editors/.
  Faizaan's portrait is the earlier site photo.
  Branch officers appear on the Editors page only.
*/

export const editorIssues = [
  {
    id: "4.0",
    title: "Pratibimb 4.0",
    editors: [
      {
        id: "faizaan-alam",
        name: "Faizaan Alam",
        role: "Chief Editor",
        issue: "4.0",
        image: "/assets/editors/4.0/faizaan.webp",
      },
      {
        id: "devansh",
        name: "Devansh",
        role: "Magazine Coordinator",
        issue: "4.0",
        image: "/assets/editors/4.0/devansh.webp",
      },
      {
        id: "abhipsita",
        name: "Abhipsita Sarkaar",
        role: "Chief Editor",
        issue: "4.0",
        image: "/assets/editors/4.0/abhipsita.webp",
      },
      {
        id: "pakhi",
        name: "Pakhi",
        role: "Chief Editor",
        issue: "4.0",
        image: "/assets/editors/4.0/pakhi.webp",
      },
    ],
  },
];

export const branchOfficers = [
  {
    id: "vivek-suryavanshi",
    name: "Vivek Suryavanshi",
    role: "President",
    image: "/assets/editors/branch/vivek.webp",
  },
  {
    id: "ayush-sharma",
    name: "Ayush Sharma",
    role: "Vice President",
    image: "/assets/editors/branch/ayush.webp",
  },
];

export const issueTeam = editorIssues[0].editors;
