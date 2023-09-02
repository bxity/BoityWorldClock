setInterval(function () {
   let seoulElement = document.querySelector("#seoul");
   let seoulDateElement = seoulElement.querySelector(".date");
   let seoulTimeElement = seoulElement.querySelector(".time");
   let seoulTime = moment().tz("Asia/Seoul");

   seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
   seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small]");
}, 1000);