const emptyResultList = () =>
  (document.querySelector(".list-output").style.visibility = "hidden");

const addToResultList = li =>
  document.querySelector(".list-output").appendChild(li);

const emptyButtonList = () =>
  (document.querySelector(".sub_buttons").innerHTML = ""); // same as .style.visibiliy = "hidden"

const addToButtonList = button =>
  document.querySelector(".sub_buttons").appendChild(button);

// Each nav button we click should first empty the UI.
// ! These elements will get multiple event listeners.
// document.querySelectorAll("nav input").forEach(input =>
//   input.addEventListener("click", () => {
//     emptyResultList();
//     emptyButtonList();
//   })
// );