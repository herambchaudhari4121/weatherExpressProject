const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");
// api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=6712620cb9d49e1f5d9eb4410e9d8f01
const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;
  if (cityVal == "") {
    city_name.innerText = `Please Write City Name Before You Search`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6712620cb9d49e1f5d9eb4410e9d8f01`
      );
      const json = await response.json();
      // console.log(json);
      const arrData = [json];

      temp_real_val.innerText = arrData[0].main.temp;
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      const tempMood = arrData[0].weather[0].main;

      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud style='color:#f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-tint' style='color:blue;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }
      dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Please Write City Name Properly`;
      dataHide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
