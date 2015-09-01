(function() {
  var log = document.getElementById("log");
  var btn = document.getElementById("getLocationBtn");
  var lat = document.getElementById("lat");
  var lon = document.getElementById("lon");
  var alt = document.getElementById("alt");
  var acc = document.getElementById("acc");
  var altAcc = document.getElementById("altAcc");
  var head = document.getElementById("head");
  var speed = document.getElementById("speed");
  var time = document.getElementById("time");

  

  function showPosition(position) {
    var coords = position.coords;

    lat.value = coords.latitude;
    lon.value = coords.longitude;
    alt.value = coords.altitude;
    acc.value = coords.accuracy;
    altAcc.value = coords.altitudeAccuracy;
    head.value = coords.heading;
    speed.value = coords.speed;
    time.value = timestamte;
  }

  function positionError(e) {
    switch(e.code){
      case 0: //Unknown error
        logMsg('Unknown error');
        break;
      case 1: //Permission denied
        logMsg('Permission denied');
        break;
      case 2: //Position unavailable
        logMsg('Position unavailable');
        break;
      case 3: //Timeout
        logMsg('Timeout');
        break;
    }
  }

  function logMsg (msg) {
    var li = document.createElement('li');
    var textnode = document.createTextNode(msg);
    li.appendChild(textnode); 
    log.appendChild(li);
  }

  btn.onclick = function(){
    if(navigator.geolocation) {

      //navigator.geolocation.watchPosition(showPosition, positionError); 
      navigator.geolocation.getCurrentPosition(showPosition, positionError); 
    }
  };
})();