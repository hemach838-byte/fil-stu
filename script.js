const students = [
  {
    name: "Hema",
    rollNumber: 50,
    branch: "CSE",
  },
  {
    name: "Durga",
    rollNumber: 51,
    branch: "CSD",
  },
  {
    name: "Sudha",
    rollNumber: 52,
    branch: "IT",
  },
  {
    name: "Srinu",
    rollNumber: 53,
    branch: "CSE",
  },
  {
    name: "Harsha",
    rollNumber: 54,
    branch: "ECE",
  },
  {
    name: "Ribka",
    rollNumber: 55,
    branch: "CSE",
  },
  {
    name: "Teja",
    rollNumber: 56,
    branch: "IT",
  },
  {
    name: "Sathish",
    rollNumber: 57,
    branch: "EEE",
  },
  {
    name: "Adwika",
    rollNumber: 58,
    branch: "ECE",
  },
  {
    name: "Lashya",
    rollNumber: 59,
    branch: "CSD",
  },
  {
    name: "Jeswika",
    rollNumber: 60,
    branch: "CSE",
  },
  {
    name: "Navya",
    rollNumber: 61,
    branch: "CSE",
  },
  {
    name: "Yamini",
    rollNumber: 62,
    branch: "CSE",
  },
  {
    name: "Poojitha",
    rollNumber: 63,
    branch: "CSD",
  },
];

const container = document.getElementById("container");

const input = document.getElementById("search");

function displayStudents(data) {
  container.innerHTML = "";
  data.forEach((s) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
     <p><b>Name:</b> ${s.name}</p>
      <p><b>Roll:</b> ${s.rollNumber}</p>
      <p><b>Branch:</b> ${s.branch}</p>
    `;
    container.appendChild(card);
  });
}
displayStudents(students);

input.addEventListener("input", function () {
  const value = input.value.toLowerCase();

  const filtered = students.filter((s) => {
    return (
      s.name.toLowerCase().includes(value) ||
      s.rollNumber.toString().includes(value) ||
      s.branch.toLowerCase().includes(value)
    );
  });
  if (filtered.length === 0) {
    container.innerHTML = "<p class='error-msg'>No student found</p>";
  } else {
    displayStudents(filtered);
  }
});
