function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  // add h1 and h2 tag
  // let createName = document.createElement('h1');
  // let createJob = document.createElement('h2');
  // content.appendChild(createName);
  // content.appendChild(createJob);

  // for (let i = 0; i < arrayOfPeople.length; i++) {
  //   let listOfNames = document.createTextNode(`${arrayOfPeople[i].name}, `);
  //   createName.appendChild(listOfNames);

  //   let listOfJobs = document.createTextNode(`${arrayOfPeople[i].job}, `);
  //   createJob.appendChild(listOfJobs);
  // };
    for(let i = 0; i < people.length; i++) {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");

    h1.textContent = people[i].name;
    h2.textContent = people[i].job;

    content.appendChild(h1);
    content.appendChild(h2);
  }
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