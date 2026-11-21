/*
  Editors, taken from the printed issues.
  Photographs live in public/assets/editors/<issue>/.
  Add a later issue by putting a new object at the top of editorIssues.
*/

function editor(id, name, role, issue, lead = false) {
  return {
    id: `${issue}-${id}`,
    name,
    role,
    issue,
    lead,
    image: `/assets/editors/${issue}/${id}.webp`,
  };
}

export const editorIssues = [
  {
    id: "4.0",
    title: "Pratibimb 4.0",
    editors: [
      editor("monica-bhutani", "Dr. Monica Bhutani", "Editor in Chief", "4.0", true),
      editor("devansh-kumar-singh", "Devansh Kumar Singh", "Chief Editor", "4.0", true),
      editor("faizaan-alam", "Faizaan Alam", "Editor", "4.0", true),
      editor("pakhi-kumar", "Pakhi Kumar", "Editor", "4.0", true),
      editor("abhipsita-sarkar", "Abhipsita Sarkar", "Editor", "4.0", true),
      editor("avya-giri", "Avya Giri", "Department head", "4.0"),
      editor("tushar-kanti-sharma", "Tushar Kanti Sharma", "Editorial board", "4.0"),
      editor("palak-chandel", "Palak Chandel", "Editorial board", "4.0"),
      editor("avaina-nixon", "Avaina Nixon", "Editorial board", "4.0"),
      editor("ritvik-gambhir", "Ritvik Gambhir", "Editorial board", "4.0"),
      editor("bhoomi-gupta", "Bhoomi Gupta", "Editorial board", "4.0"),
      editor("abdul-ahad-siddiqui", "Abdul Ahad Siddiqui", "Editorial board", "4.0"),
      editor("paramita-wadhva", "Paramita Wadhva", "Editorial board", "4.0"),
      editor("aparna-gupta", "Aparna Gupta", "Editorial board", "4.0"),
      editor("bhavya-goel", "Bhavya Goel", "Editorial board", "4.0"),
      editor("atharva-sandeep-patil", "Atharva Sandeep Patil", "Editorial board", "4.0"),
      editor("tejasvita", "Tejasvita", "Editorial board", "4.0"),
      editor("vanshika-goel", "Vanshika Goel", "Editorial board", "4.0"),
      editor("naitik-goel", "Naitik Goel", "Editorial board", "4.0"),
      editor("navkriti-anand", "Navkriti Anand", "Editorial board", "4.0"),
    ],
  },
  {
    id: "3.0",
    title: "Pratibimb 3.0",
    editors: [
      editor("monica-bhutani", "Dr. Monica Bhutani", "Faculty", "3.0", true),
      editor("nishchay-gupta", "Nishchay Gupta", "Chief editor", "3.0", true),
      editor("tishya-nangia", "Tishya Nangia", "Chief editor", "3.0", true),
      editor("divye-chandna", "Divye Chandna", "Chief editor", "3.0", true),
      editor("priyanshi-gupta", "Priyanshi Gupta", "Chief editor", "3.0", true),
      editor("aditya-popli", "Aditya Popli", "Chief editor", "3.0", true),
      editor("akshat-kansal", "Akshat Kansal", "Chief editor", "3.0", true),
      editor("harshita-bhasin", "Harshita Bhasin", "Chief editor", "3.0", true),
      editor("krish-goel", "Krish Goel", "Chief editor", "3.0", true),
      editor("shristi-ojha", "Shristi Ojha", "Chief editor", "3.0", true),
      editor("vinay-arora", "Vinay Arora", "Editorial board", "3.0"),
      editor("harshtej-singh-makkar", "Harshtej Singh Makkar", "Editorial board", "3.0"),
      editor("abhipsita-sarkar", "Abhipsita Sarkar", "Editorial board", "3.0"),
      editor("ishmeet-kaur", "Ishmeet Kaur", "Editorial board", "3.0"),
      editor("nupur-gaur", "Nupur Gaur", "Editorial board", "3.0"),
      editor("gayatri-gahtori", "Gayatri Gahtori", "Editorial board", "3.0"),
      editor("simran-bhatia", "Simran Bhatia", "Editorial board", "3.0"),
      editor("aarushi-garg", "Aarushi Garg", "Editorial board", "3.0"),
      editor("bhavya-gupta", "Bhavya Gupta", "Editorial board", "3.0"),
      editor("anushka-saxena", "Anushka Saxena", "Editorial board", "3.0"),
      editor("shourya-singhal", "Shourya Singhal", "Editorial board", "3.0"),
      editor("devansh-kumar-singh", "Devansh Kumar Singh", "Editorial board", "3.0"),
      editor("ansh-jain", "Ansh Jain", "Editorial board", "3.0"),
      editor("pakhi-kumar", "Pakhi Kumar", "Editorial board", "3.0"),
      editor("avya-giri", "Avya Giri", "Editorial board", "3.0"),
      editor("vidushi-gupta", "Vidushi Gupta", "Editorial board", "3.0"),
      editor("vanshika-gupta", "Vanshika Gupta", "Editorial board", "3.0"),
      editor("yashvi-garg", "Yashvi Garg", "Editorial board", "3.0"),
      editor("aditi-pandey", "Aditi Pandey", "Editorial board", "3.0"),
      editor("lavanya-goyal", "Lavanya Goyal", "Editorial board", "3.0"),
      editor("vanshika-pasricha", "Vanshika Pasricha", "Editorial board", "3.0"),
      editor("vrinda-garg", "Vrinda Garg", "Editorial board", "3.0"),
      editor("srishti", "Srishti", "Editorial board", "3.0"),
      editor("faizaan-alam", "Faizaan Alam", "Editorial board", "3.0"),
      editor("aastha-narang", "Aastha Narang", "Editorial board", "3.0"),
      editor("charvi-dhamija", "Charvi Dhamija", "Editorial board", "3.0"),
      editor("manishka-gupta", "Manishka Gupta", "Editorial board", "3.0"),
      editor("uday-verma", "Uday Verma", "Editorial board", "3.0"),
      editor("saksham-deva", "Saksham Deva", "Editorial board", "3.0"),
    ],
  },
];

export const issueTeam = editorIssues[0].editors.filter((member) => member.lead);

export default editorIssues;
