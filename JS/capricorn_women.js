// SUB-EXERCISE Capricorn women
const btnCapricornWomen = document.querySelector(".btn-capricorn_women");
const filteredPeople = [];
const birthdayArray = [];
// filter Capricorn
for (let {birthday: {dmy: d}} of randomPersonData) {
  capricornArray.push(d);
};
console.log(birthdayArray);


// filter women, aged 30 or older and Capricorn
const womanArray = randomPersonData.filter(function (person) {
  return person.title == "mrs" && person.age >= 30 && person.birthday;
});
console.log(womanArray);

// Get an name, surname and photo data
function listOfWoman() {
  const ulCapriWoman = document.createElement("ul");
  womanArray.map((woman) => {
    const liWoman = document.createElement("li")
    const img = document.createElement("img");
      img.src = woman.photo;
      liWoman.appendChild(img);
      ulCapriWoman.appendChild(liWoman); 
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
