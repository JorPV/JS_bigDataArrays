// SUB-EXERCISE Capricorn women
const btnCapricornWomen = document.querySelector(".btn-capricorn_women");
const filteredPeople = [];
const birthdaysArray = [];

// 1. Get the birthdays
for (let {birthday: {dmy: d}} of randomPersonData) {
  if (d)
  birthdaysArray.push(d);
  };
console.log(birthdaysArray); 


// 2.filter Capricorn
const startDate = new Date ('December 22');
console.log(startDate)
const endDate = new Date ("January 19");
console.log(endDate)


const getCapricorn = birthdaysArray.forEach(date => Date.parse(date));
console.log (getCapricorn);


// const filterCapricorn = (person) => {
//   const month = parseInt(person.birthday.dmy.split("/")[1]);
//   console.log(month); // 1..12
//   const day = parseInt(person.birthday.dmy.split("/")[0]); // 1..31
//   let result = birthdaysArray.filter(e => new Date (e) >= sDate && new Date (e) <= eDate);
//   return result;
// };

// console.log(filterCapricorn())

const isCapricorn = (person) => {
  const dmy = person.birthday.dmy;
  return dmy;
}
console.log(isCapricorn())


// filter women, aged 30 or older and Capricorn
const woman30 = randomPersonData.filter(function (person) {
  // const month = parseInt(person.birthday.dmy.split("/")[1]); // 1..12
  // console.log(month);
  // const day = parseInt(person.birthday.dmy.split("/")[0]); // 1..31
  return person.gender === "female" && person.age >= 30 //&& month >= startDate || person.birthday.dmy <= endDate;
});
// sort women by name
const sortWomenByName = () => {
  return woman30.sort((a,b) => (a.name > b.name ? 1: -1)); 
};

console.log(sortWomenByName())


// // Get the name, surname and photo data
// const listOfWomen = function() {
//   const ulCapriWoman = document.createElement("ul");
//   womanArray.map((woman) => {
//     const liWoman = document.createElement("li")
//     const img = document.createElement("img");
//       img.src = woman.photo;
//       liWoman.appendChild(img);
//       ulCapriWoman.appendChild(liWoman); 
//     if (!filteredPeople.includes(woman)) {
//       filteredPeople.push(woman.name + " " + woman.surname + " " + img.src);
//     }
//     return filteredPeople.sort(); //  Sort people by name
//   });
//   console.log(filteredPeople);
// }

// console.log(listOfWomen());





// // Add list of people to DOM
// const ulCapriWomen = document.createElement("ul");
// const addlistToDom = filteredPeople.forEach((person) => {
//   // create html elements
//   const liCapriWomen = document.createElement("li");
//   liCapriWomen.innerHTML = person;
//   ulCapriWomen.appendChild(liCapriWomen);
// });

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