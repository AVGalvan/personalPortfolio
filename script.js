const generateRandNum = numOfProjects =>{
  return Math.floor(Math.random() * numOfProjects);
}

let currentProjectNumber = 0;
const generateNewProject = () => {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const image = document.getElementById('websiteImage');
  let projectNumber = generateRandNum(2); //change argument passed to # of projects
  
  while(projectNumber === currentProjectNumber){
    projectNumber = generateRandNum(2);//change argument passed to # of projects
  }
  console.log(projectNumber);
  currentProjectNumber = projectNumber;
  

  switch(currentProjectNumber){
    case 0:
      title.innerHTML = 'Budget Calculator V.2';
      description.innerHTML = `This is a second pass at a preexisting calculator that I use for quickly checking how much money goes where. It is narrowly tailored for my form of budgeting so I can just plug in some numbers and generate some guidelines without having to think too much about it.`;
      image.src="../resources/images/budgetCalculatorScreenshot.jpg"
      break;
    case 1: 
      title.innerHTML = `Axel's Art Page`;
      description.innerHTML = `A site to put up some pieces of artwork and sketches whenever the inspiration strikes me. This is a place I can send folks whenever someone asks for some examples of art I have produced.`;
      image.src="../resources/images/axelsArtPageScreenshot.jpg";
      break;
  }  
}

document.getElementById('generateProject').addEventListener('click', generateNewProject)