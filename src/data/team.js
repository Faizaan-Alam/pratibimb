/*
  HOW TO UPDATE THE TEAM

  Names, roles, and descriptions: edit the objects in this file.
  Photographs: replace the .webp file in public/assets/team/. Keep the filename.

    faizaan.webp          -> Faizaan Alam
    pakhi.webp            -> Pakhi
    abhipshita.webp       -> Abhipshita
    devansh.webp          -> Devansh Kumar
    monika-bhutani.webp   -> Monika Bhutani

  Do not change the image path unless you also rename the file.
  Leave description empty if you do not have copy. Do not invent biographies.
*/

export const team = [
  {
    id: "faizaan-alam",
    name: "Faizaan Alam",
    role: "Chief Editor",
    group: "Chief Editors",
    number: "01",
    image: "/assets/team/faizaan.webp",
    description: "",
  },
  {
    id: "pakhi",
    name: "Pakhi",
    role: "Chief Editor",
    group: "Chief Editors",
    number: "02",
    image: "/assets/team/pakhi.webp",
    description: "",
  },
  {
    id: "abhipshita",
    name: "Abhipshita",
    role: "Chief Editor",
    group: "Chief Editors",
    number: "03",
    image: "/assets/team/abhipshita.webp",
    description: "",
  },
  {
    id: "devansh-kumar",
    name: "Devansh Kumar",
    role: "Magazine Coordinator",
    group: "Magazine Coordinator",
    number: "04",
    image: "/assets/team/devansh.webp",
    description: "",
  },
  {
    id: "monika-bhutani",
    name: "Monika Bhutani",
    // Title as printed in Pratibimb 3.0. Change this string if 4.0 uses another title.
    role: "Branch Counsellor",
    group: "Faculty",
    number: "05",
    image: "/assets/team/monika-bhutani.webp",
    description: "",
  },
];

export const teamGroups = ["Chief Editors", "Magazine Coordinator", "Faculty"];

export default team;
