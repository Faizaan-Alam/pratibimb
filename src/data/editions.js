/*
  HOW TO ADD A NEW MAGAZINE EDITION
  1. Place the PDF in public/assets/editions/ (example: pratibimb-5.0.pdf)
  2. Optional: add a cover as public/assets/editions/pratibimb-5.0-cover.webp
  3. Copy an object in the editions array below and fill in the fields
  4. Set status: "current" on the latest issue, and "archive" on the others
  5. Set pdfAvailable: true only after the PDF file is actually in the folder

  Cover images are optional. If cover is empty, the site draws an edition plate
  from the title, version, and logo.
*/

export const editions = [
  {
    id: "4.0",
    slug: "pratibimb-4.0",
    title: "Pratibimb 4.0",
    version: "4.0",
    year: "2026",
    academicYear: "",
    status: "current",
    tagline: "Capturing perfection in every reflection.",
    description:
      "The current edition of Pratibimb, the annual magazine of the IEEE Student Branch at Bharati Vidyapeeth's College of Engineering, New Delhi.",
    cover: "",
    pdf: "/assets/editions/pratibimb-4.0.pdf",
    pdfAvailable: false,
    pageCount: null,
    sections: [
      "Society Snapshot",
      "Awards & Achievement",
      "Events Archive",
      "Project Reports",
      "Technical Articles",
      "Non-Technical Articles",
      "Reviews and Reflections",
    ],
  },
  {
    id: "3.0",
    slug: "pratibimb-3.0",
    title: "Pratibimb 3.0",
    version: "3.0",
    year: "2025",
    academicYear: "2024-2025",
    status: "archive",
    tagline: "Capturing perfection in every reflection.",
    description:
      "The third edition of Pratibimb. The issue gathers a society snapshot, awards, an events archive, project reports, technical articles, photography, poetry, and alumni reflections.",
    cover: "/assets/editions/pratibimb-3.0-cover.webp",
    pdf: "/assets/editions/pratibimb-3.0.pdf",
    pdfAvailable: true,
    pageCount: 117,
    sections: [
      "Society Snapshot",
      "Awards & Achievement",
      "Events Archive",
      "Project Reports",
      "Technical Articles",
      "Non-Technical Articles",
      "Reviews and Reflections",
    ],
  },
];

export function getCurrentEdition() {
  return editions.find((edition) => edition.status === "current") || editions[0];
}

export function getEditionBySlug(slug) {
  return editions.find((edition) => edition.slug === slug);
}

export function getReadableEditions() {
  return editions.filter((edition) => edition.pdfAvailable);
}

export function getLatestReadableEdition() {
  return getReadableEditions()[0] || null;
}
