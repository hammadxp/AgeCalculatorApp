const daySelector = document.getElementById("day-selector");
const ageForm = document.getElementById("age-form");

ageForm.addEventListener("submit", function () {
  const ageData = new FormData(ageForm);
  console.log(ageData);
});

// for (let i = 1; i <= 31; i++) {
//   let option = document.createElement("option");
//   option.value = i;
//   option.innerHTML = i;
//   daySelector.appendChild(option);
// }
