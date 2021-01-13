let btn= document.querySelector("#ask-weather")

let divResult= document.querySelector('#weather-result')

const askWeather = ()=>{
  const url = "https://www.prevision-meteo.ch/services/json/paris"
 // const fullUrl= url + country

  let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            divResult.textContent = response.current_condition.condition;
        }
    };
  request.open("GET", url );
  request.send();


}


btn.addEventListener('click', () => {

  askWeather()

})


/**
 * code HTML
 *
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="base.css">
  </head>
  <body>
    <div>
      <button id="ask-weather">Quelle est la météo sur Paris ?</button>

      </div>
    <div id="weather-result"></div>

    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
 */