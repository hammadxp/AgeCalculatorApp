const ageForm = document.getElementById("age-form");

// Validate Form

ageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Resets calculated age

  document.getElementById("calc-years").textContent = "--";
  document.getElementById("calc-months").textContent = "--";
  document.getElementById("calc-days").textContent = "--";

  // Get form data

  const dayInput = document.getElementById("day-input");
  const monthInput = document.getElementById("month-input");
  const yearInput = document.getElementById("year-input");

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  // Validate

  let invalid;

  const dayInvalidText = document.getElementById("day-invalid-text");
  const monthInvalidText = document.getElementById("month-invalid-text");
  const yearInvalidText = document.getElementById("year-invalid-text");

  if (day < 1 || day > 31) {
    // Add red highlights

    dayInput.previousElementSibling.classList.add("text-is-light-red"); // Highlight label
    dayInput.classList.add("ring-2", "ring-is-light-red"); // Highlight border
    dayInvalidText.classList.remove("hidden"); // Show text below

    invalid = true;
  } else {
    // Remove red highlights

    dayInput.previousElementSibling.classList.remove("text-is-light-red");
    dayInput.classList.remove("ring-2", "ring-is-light-red");
    dayInvalidText.classList.add("hidden");
  }

  if (month < 1 || month > 12) {
    // Add red highlights

    monthInput.previousElementSibling.classList.add("text-is-light-red");
    monthInput.classList.add("ring-2", "ring-is-light-red");
    monthInvalidText.classList.remove("hidden");

    invalid = true;
  } else {
    // Remove red highlights

    monthInput.previousElementSibling.classList.remove("text-is-light-red");
    monthInput.classList.remove("ring-2", "ring-is-light-red");
    monthInvalidText.classList.add("hidden");
  }

  if (year < 1970 || year > 2023) {
    // Add red highlights

    yearInput.previousElementSibling.classList.add("text-is-light-red");
    yearInput.classList.add("ring-2", "ring-is-light-red");
    yearInvalidText.classList.remove("hidden");

    invalid = true;
  } else {
    // Remove red highlights

    yearInput.previousElementSibling.classList.remove("text-is-light-red");
    yearInput.classList.remove("ring-2", "ring-is-light-red");
    yearInvalidText.classList.add("hidden");
  }

  var maxDay = new Date(year, month, 0).getDate();
  if (day > maxDay) {
    dayInput.previousElementSibling.classList.add("text-is-light-red");
    monthInput.previousElementSibling.classList.add("text-is-light-red");
    yearInput.previousElementSibling.classList.add("text-is-light-red");

    dayInput.classList.add("ring-2", "ring-is-light-red");
    monthInput.classList.add("ring-2", "ring-is-light-red");
    yearInput.classList.add("ring-2", "ring-is-light-red");

    dayInvalidText.classList.remove("hidden");
    dayInvalidText.textContent = "Must be a valid date";

    invalid = true;
  }

  if (invalid) return;

  const birthDateRaw = `${month}-${day}-${year}`;
  ageCalculator(birthDateRaw);
});

// Calculate Age

const ageCalculator = function (birthDateRAW) {
  const currentDate = new Date();
  const birthDate = new Date(birthDateRAW);

  const diffInMilliseconds = currentDate.getTime() - birthDate.getTime();
  const millisecondsInADay = 24 * 60 * 60 * 1000;

  const years = Math.floor(diffInMilliseconds / (millisecondsInADay * 365));
  const months = Math.floor((diffInMilliseconds % (millisecondsInADay * 365)) / (millisecondsInADay * 30));
  const days = Math.floor((diffInMilliseconds % (millisecondsInADay * 30)) / millisecondsInADay);

  const yearsEl = document.getElementById("calc-years");
  const monthsEl = document.getElementById("calc-months");
  const daysEl = document.getElementById("calc-days");

  animateText(yearsEl, years);
  animateText(monthsEl, months);
  animateText(daysEl, days);
};

// Animate

function animateText(element, maxNum) {
  let count = 1;
  let animationId;

  function updateText() {
    element.textContent = count;
    count++;

    if (count <= maxNum) {
      animationId = requestAnimationFrame(updateText);
    }
  }

  if (maxNum > 0) {
    animationId = requestAnimationFrame(updateText);
  }

  function stopAnimation() {
    cancelAnimationFrame(animationId);
  }

  setTimeout(stopAnimation, (maxNum - 1) * 50); // Stop the animation after reaching the maxNum, in milliseconds
}
