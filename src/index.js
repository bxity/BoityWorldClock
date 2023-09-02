setInterval(function () {
   let seoulElement = document.querySelector("#seoul");
   let seoulDateElement = seoulElement.querySelector(".date");
   let seoulTimeElement = seoulElement.querySelector(".time");
   let seoulTime = moment().tz("Asia/Seoul");

   seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
   seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small]");
}, 1000);

setInterval(function () {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small]");
}, 1000);

setInterval(function () {
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss [<small>]A[</small]");
}, 1000);

setInterval(function () {
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format("h:mm:ss [<small>]A[</small]");
}, 1000);

