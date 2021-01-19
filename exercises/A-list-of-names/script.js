function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  // add h1 and h2 tag
  let createName = document.createElement('h1');
  let createJob = document.createElement('h2');
  content.appendChild(createName);
  content.appendChild(createJob);

  for (let i = 0; i < arrayOfPeople.length; i++) {
    let listOfNames = document.createTextNode(`${arrayOfPeople[i].name}, `);
    createName.appendChild(listOfNames);

    let listOfJobs = document.createTextNode(`${arrayOfPeople[i].job}, `);
    createJob.appendChild(listOfJobs);
  };
};

let people = [{
    name: "Chris",
    job: "Teacher"
  },
  {
    name: "Joanna",
    job: "Student"
  },
  {
    name: "Boris",
    job: "Prime Minister"
  },
];

listOfNames(people);