const monthEl = document.querySelector(".month-name");
const dayEl = document.querySelector(".day-name");
const dayNumber = document.querySelector(".day-number");
const year = document.querySelector(".year");
const time = document.querySelector(".time")

const updateCalender = function () {
  const date = new Date();

  monthEl.innerText = date.toLocaleString("en", {
    month: "long",
  });

  dayEl.innerText = date.toLocaleString("en", {
    weekday: "long",
  });

  dayNumber.innerText = date.getDate();
  year.innerText = date.getFullYear();
  setTimeout(updateCalender, 1000);

  time.innerText = date.toLocaleTimeString("en")
};
updateCalender();
