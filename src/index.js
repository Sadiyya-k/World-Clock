function updateTime() {
  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  let istanbulTime = moment().tz("Europe/Istanbul");

  istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do YYYY");
  istanbulTimeElement.innerHTML = istanbulTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  let melbourneTime = moment().tz("Australia/Melbourne");

  melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
  melbourneTimeElement.innerHTML = melbourneTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTime.format("H:mm:ss [<small>]A[</small>]");
}

function selectedCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectedElement = document.querySelector("#city");
citiesSelectedElement.addEventListener("change", selectedCity);
