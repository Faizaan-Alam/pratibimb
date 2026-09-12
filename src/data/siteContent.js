/*
  HOW TO EDIT SITE COPY
  Change the strings in this file. UI components read from here.
  Do not invent history, quotes, or links. Mark unfinished copy with placeholder: true.
*/

export const site = {
  name: "Pratibimb",
  editionLabel: "Pratibimb 4.0",
  college: "Bharati Vidyapeeth's College of Engineering, New Delhi",
  collegeShort: "BVCOE",
  branch: "IEEE BVCOE Student Branch",
  meaning: "reflection",
  tagline: "Capturing perfection in every reflection.",
  heroLede:
    "The annual magazine of the IEEE Student Branch at Bharati Vidyapeeth's College of Engineering, New Delhi.",
  footerStatement:
    "Pratibimb is a reflection of the people, ideas, creativity, and voices of IEEE BVCOE.",
  nav: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/archive", label: "Archive" },
    { to: "/team", label: "Team" },
    { to: "/explore", label: "Explore" },
  ],
};

export const about = {
  kicker: "About the magazine",
  title: "What Pratibimb is",
  paragraphs: [
    "Pratibimb is the annual magazine of the IEEE Student Branch at Bharati Vidyapeeth's College of Engineering, New Delhi. The name means reflection.",
    "Each edition is a record of the branch's year: its people, its work, and the ideas that moved through campus. The magazine holds technical writing beside photography and poetry because both belong to the same community.",
    "Pratibimb exists so student work has a public form. It is a document of IEEE BVCOE, and it is also a space for voices that do not fit a lab report.",
  ],
  evolution: [
    "Pratibimb 3.0, issued for 2024-2025, is the third edition. Its printed index is built around society, awards, events, project reports, technical articles, non-technical work, and alumni reflections.",
    "Pratibimb 4.0 continues that editorial shape in print and on this site. The website is the digital home of the magazine: a place to read an issue, return to the archive, and meet the people who make it.",
  ],
  collegeNote: {
    title: "The college, as printed in Pratibimb 3.0",
    source: "Pratibimb 3.0",
    text: "Established in 1999, Bharati Vidyapeeth's College of Engineering (BVCOE), New Delhi, is affiliated with Guru Gobind Singh Indraprastha University and recognized by the All India Council for Technical Education (AICTE). Pratibimb is published from the IEEE Student Branch of the college.",
  },
};

export const editorial = {
  kicker: "Editorial",
  title: "Letters in the issue",
  intro:
    "Printed Pratibimb issues open with notes from the college, IEEE, and the student branch. The passages below are from Pratibimb 3.0. The 4.0 editors' letter can be added when it is ready.",
  fromCurrentEditors: {
    title: "From the editors of Pratibimb 4.0",
    placeholder: true,
    body: "The editors' letter for Pratibimb 4.0 will appear here.",
    signoff: "Faizaan Alam, Pakhi, Abhipsita Sarkaar, and Devansh",
    role: "Pratibimb 4.0",
  },
  excerpts: [
    {
      id: "sood",
      source: "Pratibimb 3.0",
      quote:
        "The very name, Pratibimb, signifies reflection, and indeed, this publication beautifully reflects the energy, imagination, and technical spirit of your vibrant IEEE Student Branch.",
      attribution: "Daman Dev Sood",
      role: "Chair, PR&P Standing Committee, IEEE Delhi Section",
    },
    {
      id: "bhutani",
      source: "Pratibimb 3.0",
      quote:
        "This magazine symbolizes so much more than just a compilation of articles. It is the mirror of ceaseless hard work, enthusiasm, and the dynamic energy of our IEEE BVCOE team.",
      attribution: "Dr. Monica Bhutani",
      role: "Branch Counsellor, IEEE BVCOE",
    },
    {
      id: "saini",
      source: "Pratibimb 3.0",
      quote:
        "Pratibimb 3.0 stands as a reflection of the relentless efforts of our students and the branch counselor, who have once again curated an enriching collection of articles, research works, and creative expressions.",
      attribution: "Prof. (Dr.) Dharmender Saini",
      role: "Principal, BVCOE, New Delhi",
    },
  ],
};

export const categories = [
  {
    id: "society",
    number: "01",
    name: "Society Snapshot",
    description:
      "The shape and culture of IEEE BVCOE: a community built on creativity, collaboration, and curiosity.",
  },
  {
    id: "awards",
    number: "02",
    name: "Awards & Achievement",
    description: "Milestones and accomplishments of students in the branch.",
  },
  {
    id: "events",
    number: "03",
    name: "Events Archive",
    description:
      "A record of gatherings that defined the year, from technical programmes to campus events.",
  },
  {
    id: "projects",
    number: "04",
    name: "Project Reports",
    description:
      "Software and hardware projects, written as a glimpse of work that moved from idea to build.",
  },
  {
    id: "technical",
    number: "05",
    name: "Technical Articles",
    description:
      "Essays on emerging technology, written by students for the magazine.",
  },
  {
    id: "creative",
    number: "06",
    name: "Non-Technical Articles",
    description:
      "Artistic work from the issue, including photography and poetry.",
  },
  {
    id: "reflections",
    number: "07",
    name: "Reviews and Reflections",
    description:
      "Notes from alumni and outgoing members, looking back on the branch and the year.",
  },
];

export const exploreNote =
  "These categories follow the printed index of Pratibimb 3.0. Individual articles are read inside each edition. This page is a map, not a second archive of extracted pieces.";
