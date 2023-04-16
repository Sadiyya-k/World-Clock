function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  let istanbulElement = document.querySelector("#istanbul");
  if (istanbulElement) {
    let istanbulDateElement = istanbulElement.querySelector(".date");
    let istanbulTimeElement = istanbulElement.querySelector(".time");
    let istanbulTime = moment().tz("Europe/Istanbul");

    istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do YYYY");
    istanbulTimeElement.innerHTML = istanbulTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    let melbourneTime = moment().tz("Australia/Melbourne");

    melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
    melbourneTimeElement.innerHTML = melbourneTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  let karachiElement = document.querySelector("#karachi");
  if (karachiElement) {
    let karachiDateElement = karachiElement.querySelector(".date");
    let karachiTimeElement = karachiElement.querySelector(".time");
    let karachiTime = moment().tz("Asia/Karachi");

    karachiDateElement.innerHTML = karachiTime.format("MMMM Do YYYY");
    karachiTimeElement.innerHTML = karachiTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}

function selectedCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm:ss"
          )}<small>${cityTime.format(" A")}</small></div>
        </div>
        <a href="index.html">Back to Homepage<a/>
`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectedElement = document.querySelector("#city");
citiesSelectedElement.addEventListener("change", selectedCity);
