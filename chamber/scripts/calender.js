const month = new Date();
const options = {
  month: "long"
};

const year1 = new Date();

let year = year1.getFullYear();

const date1 = new Date();

let dateNum = date1.getDate();

const day = new Date();

const options2 = {
  weekday: "long"
};

console.log(day.toLocaleString("en-IN", options2));

function myFunction() {
  document.getElementById("monthNum").innerText = month.toLocaleString(
    "en-IN",
    options
  );
  document.getElementById("yearNum").innerText = year;
  document.getElementById("dateNum").innerText = dateNum;
  document.getElementById("dayNum").innerText = day.toLocaleString(
    "en-IN",
    options2
  );
}
myFunction();