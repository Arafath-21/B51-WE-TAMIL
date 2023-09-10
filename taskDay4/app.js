// Sample JSON object
const person = {
    name: "Arafath A",
    age: 30,
    profession: "Software Developer",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
  };

  console.log("Using for...in loop:");
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  console.log("\nUsing for...of loop:");
  const skills = person.skills;
  for (const skill of skills) {
    console.log(skill);
  }
  
  console.log("\nUsing forEach:");
  person.skills.forEach((skill) => {
    console.log(skill);
  });
  
  console.log("\nSample resume data in JSON format :");
const resume = {
    name: "Arafath A",
    contact: {
      email: "arafath@gmail.com",
      phone: "+1234567890",
      address: "123 Main Street, xxx, yyy",
    },
    summary: "Experienced software engineer with a passion for web development.",
    education: [
      {
        degree: "Bachelor of Enginnering in Automobile",
        school: "Anna University",
        year: 2021,
      },
      {
        degree: "Master of Science in Software Engineering",
        school: "Anna University",
        year: 2017,
      },
    ],
    experience: [
      {
        position: "Frontend Developer",
        company: "ZoCo.",
        year: "2021-2023",
        responsibilities: [
          "Developed user-friendly and responsive web applications.",
          "Collaborated with designers to implement UI/UX designs.",
        ],
      },
      {
        position: "Full Stack Developer",
        company: "Web Inc.",
        year: "2019-Present",
        responsibilities: [
          "Designed and implemented RESTful APIs.",
          "Worked on database design and optimization.",
        ],
      },
    ],
  };
  
  console.log(resume);
  