/*var APPID = "1d3f649c801e0b64c447576938215548";*/

$(document).ready(function() {

  //city api
  var cityApi = "http://ip-api.com/json";

  //grabbed elements out of the api
  $.getJSON(cityApi, function(user) {
    var long = user.lon;
    var lat = user.lat;
    var city = user.city;

    //weather api
    api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=1d3f649c801e0b64c447576938215548";
    //grabbed elements out of the weather api
    $.getJSON(api, function(data) {
      var tempK = data.main.temp;
      var humid = data.main.humidity;
      var icon = data.weather[0].icon;
      var wind = data.wind.speed;
      var dir = data.wind.deg;
      var desc = data.weather[0].description;

    

      var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";

      function degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        newDir = arr[(val % 16)];
        return newDir;

      }

      var newDir = degToCompass(dir);

      //to convert kelvin to ferenhiegt 

      var tempF = Math.floor((tempK * 1.8) - 459.67);
      var tempC = Math.round(0.55555556 * (tempF - 32));

      document.getElementById("location").innerHTML = city;
      document.getElementById("description").innerHTML = desc;
      document.getElementById("tempFer").innerHTML = tempF + "°F";
      document.getElementById("Cel").innerHTML = tempC + "°C";
      document.getElementById("icon").src = iconUrl;
      document.getElementById("humid").innerHTML = humid;
      document.getElementById("wind").innerHTML = wind;
      document.getElementById("dir").innerHTML = newDir;

    });

  });

});