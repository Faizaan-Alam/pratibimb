/*
  HOW TO UPDATE THE TEAM

  Current team names, roles, and descriptions: edit issueTeam below.
  Photographs: replace the .webp file in public/assets/team/. Keep the filename.

    faizaan.webp          -> Faizaan Alam
    pakhi.webp            -> Pakhi
    abhipshita.webp       -> Abhipsita Sarkaar
    devansh.webp          -> Devansh
    monika-bhutani.webp   -> Monika Bhutani

  Exes (previous issues): add objects to the exes array.
  Optional photo: public/assets/team/<filename>.webp then set image.

  Do not invent biographies. Leave description empty if you do not have copy.
*/

export const issueTeam = [
  {
    id: "faizaan-alam",
    name: "Faizaan Alam",
    role: "Chief Editor",
    issue: "4.0",
    number: "01",
    image: "/assets/team/faizaan.webp",
    description: "",
  },
  {
    id: "pakhi",
    name: "Pakhi",
    role: "Chief Editor",
    issue: "4.0",
    number: "02",
    image: "/assets/team/pakhi.webp",
    description: "",
  },
  {
    id: "abhipshita",
    name: "Abhipsita Sarkaar",
    role: "Chief Editor",
    issue: "4.0",
    number: "03",
    image: "/assets/team/abhipshita.webp",
    description: "",
  },
  {
    id: "devansh-kumar",
    name: "Devansh",
    role: "Magazine Coordinator",
    issue: "4.0",
    number: "04",
    image: "/assets/team/devansh.webp",
    description: "",
  },
];

export const faculty = [
  {
    id: "monika-bhutani",
    name: "Monika Bhutani",
    // Title as printed in Pratibimb 3.0. Change this string if a later issue uses another title.
    role: "Branch Counsellor",
    number: "05",
    image: "/assets/team/monika-bhutani.webp",
    description: "",
  },
];

/*
  Previous Pratibimb people. Add a name, role, and issue (for example "3.0").
  Photograph is optional.
*/
export const exes = [];

export const team = [...issueTeam, ...faculty];

export const teamGroups = ["Chief Editors", "Magazine Coordinator", "Faculty"];

export default team;
