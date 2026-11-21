/*
  HOW TO ADD A NEW MAGAZINE EDITION
  1. Place the PDF in public/assets/editions/
  2. Optional cover: public/assets/editions/pratibimb-5.0-cover.webp
  3. Copy an object in the editions array below
  4. Set status: "current" on the latest issue

  Cover images are optional. If no cover file is found, the site draws
  an edition plate from the title, version, and logo.
*/

export const editions = [
  {
    id: "4.0",
    slug: "pratibimb-4.0",
    title: "Pratibimb 4.0",
    version: "4.0",
    year: "2026",
    status: "current",
    tagline: "Capturing perfection in every reflection.",
    description:
      "The current edition of Pratibimb, the annual magazine of the IEEE Student Branch at Bharati Vidyapeeth's College of Engineering, New Delhi.",
    dropFolder: "/assets/editions/pratibimb",
    detectFiles: true,
    pdf: "/assets/editions/pratibimb/pratibimb.pdf",
    cover: "/assets/editions/pratibimb/cover.jpg",
    pdfCandidates: ["/assets/editions/pratibimb/pratibimb.pdf"],
    coverCandidates: [
      "/assets/editions/pratibimb/cover.webp",
      "/assets/editions/pratibimb/cover.jpg",
    ],
    pdfAvailable: true,
    pageCount: 106,
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
  },
];
