function updateTime() {
  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  let istanbulTime = moment().tz("Europe/Istanbul");

  istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do YYYY");
  istanbulTimeElement.innerHTML = istanbulTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz("Asia / Bangkok");

  bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTime.format("H:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
