// SUB-EXERCISE Country list

// get countries
const countriesArray = [];

function getPersonData() {
  randomPersonData.map((person) => {
    if (!countriesArray.includes(person.region)) {
      countriesArray.push(person.region);
    }
    return countriesArray.sort(); //  Sort countries by name
  });

  let ul = document.querySelector(".list-output");
  // Add list of countries to DOM
  countriesArray.forEach((country) => {
    // create a list of coutries
    const li = document.createElement("li");
    li.innerHTML = country;
    ul.appendChild(li)
    // console.log(li); // check the result
    return li;
  });

  // Display countries
  const displayCountries = () => {
    li.forEach(addToResultList);
    return displayCountries
  };
  let buttonStatus = false;
  if (buttonStatus === false) {
    //  displayCountries(addToResultList(), addToButtonList())
    
    buttonStatus = true;
  } else if (buttonStatus === true) {
    displayCountries(emptyResultList(), emptyButtonList())

    buttonStatus = false;
}
}


// Add list to event button
const btnCountries = document.querySelector(".btn-countries");
btnCountries.addEventListener("click", (event) => getPersonData(event));

// btnCountries.addEventListener("click", getPersonData());

