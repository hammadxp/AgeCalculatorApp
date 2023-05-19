const daySelector = document.getElementById("daySelector");

for (let i = 1; i <= 31; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  daySelector.appendChild(option);
}
