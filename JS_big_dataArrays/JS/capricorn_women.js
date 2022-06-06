// SUB-EXERCISE Capricorn women
const btnCapricornWomen = document.querySelector(".btn-capricorn_women");
const filteredPeople = [];
const capricornArray = [];

// filter Capricorn
const isCapricorn = (person) => {
  const dmy = person.birthday.dmy;
  return dmy; // true if birthday object matches the requirement "tussen December 22 en January 19"
}


// filter women, aged 30 or older
const womanArray = randomPersonData.filter(function (person) {
  return person.gender === "female" && person.age >= 30// && person.birthday;
});
// console.log(womanArray);

// same as 
const persons = [...randomPersonData];

const isFemale = (person) => person.gender === "female";
const isAbove30 = (person) => person.age >= 30;

const femalesAbove30 = persons.filter(isFemale).filter(isAbove30);
console.log(femalesAbove30);

// Get an name, surname and photo data
const listOfWoman = () => {
  const ul = document.querySelector(".list-output");
  womanArray.map((woman) => {
    const liWoman = document.createElement("li")
    const img = document.createElement("img");
      img.src = woman.photo;
      liWoman.appendChild(img);
      ul.appendChild(liWoman); 
    if (!filteredPeople.includes(woman)) {
      filteredPeople.push(woman.name + " " + woman.surname + " " + img.src);
    }
    return filteredPeople.sort(); //  Sort people by name
  });
  console.log(filteredPeople);
}

listOfWoman();

// Add list of people to DOM
 const ulCapriWomen = document.createElement("ul");
const addlistToDom = filteredPeople.forEach((person) => {
  // create html elements
  const liCapriWomen = document.createElement("li");
  liCapriWomen.innerHTML = person;
  ulCapriWomen.appendChild(liCapriWomen);

  // if (buttonStatus === false) {
  //   ulCountries.style.visibility = "hidden";

  //   buttonStatus = true;

  // } else if (buttonStatus == true) {
  //   ulCountries.style.visibility = "visible";

  //   buttonStatus = false;
  // }
});

// const listOfPhotos = document.querySelector("#container");

// function addPhotosToDom() {
//   const ulPhotos = document.querySelector("#ul-photos");
//   // clear ul
//   ulPhotos.innerHTML= " ";
//   randomPersonData.map((data) => {
//     const liPhotos = document.createElement("li");
//     const img = document.createElement("img");
//     img.src = data.photo;
//     liPhotos.appendChild(img);
//     ulPhotos.appendChild(liPhotos);
//     listOfPhotos.appendChild(ulPhotos);
//     return liPhotos;
//   });
// }

// addPhotosToDom();
