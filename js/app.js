

// name 4 callb
function name4ReqListener () {
  data = JSON.parse(this.responseText);
  var person4Name = document.getElementById("person4Name");
  person4Name.innerHTML = data.name;

}

// hw4 callb
function hw4ReqListener () {
  data = JSON.parse(this.responseText);
  var person4HomeWorld = document.getElementById("person4HomeWorld");
  person4HomeWorld.innerHTML = data.name;
}

// name 4 req
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", name4ReqListener);
oReq.open("GET", "http://swapi.co/api/people/4/");
oReq.send();

// hw 4 req
var hwReq = new XMLHttpRequest();
hwReq.addEventListener("load", hw4ReqListener);
hwReq.open("GET", "http://swapi.co/api/planets/1/");
hwReq.send();

// name 14 callb
function name14ReqListener () {
  data = JSON.parse(this.responseText);
  var person14Name = document.getElementById("person14Name");
  person14Name.innerHTML = data.name
}

// name 14 req
var n14Req = new XMLHttpRequest();
n14Req.addEventListener("load", name14ReqListener);
n14Req.open("GET", "http://swapi.co/api/people/14/");
n14Req.send();


// person 14 species callb
function spec14ReqListener () {
  data = JSON.parse(this.responseText);
  var person14Species = document.getElementById("person14Species");
  person14Species.innerHTML = data.name
}

// person 14 species req
var spec14Req = new XMLHttpRequest();
spec14Req.addEventListener("load", spec14ReqListener);
spec14Req.open("GET", "http://swapi.co/api/species/1/");
spec14Req.send();



// film list
var filmReq = new XMLHttpRequest();
filmReq.addEventListener("load", filmReqEventListener);
filmReq.open("GET", "http://swapi.co/api/films/");
filmReq.send();


function filmReqEventListener () {
  var films = JSON.parse(this.responseText);
  var results = films.results;
  var ul = document.getElementById('filmList')
  for(var i = 0; i<results.length; i ++) {
    console.log(results[i].title);
    var filmLi = document.createElement('li');
    ul.appendChild(filmLi);
    var newFilm = document.createElement("h2");
    filmLi.appendChild(newFilm)
    newFilm.innerHTML = results[i].title;
    var planetsH3 = document.createElement('h3');
    planetsH3.innerHTML = "Planets";
    filmLi.appendChild(planetsH3);
    var filmPlanets = document.createElement('ul');
    filmLi.appendChild(filmPlanets);
    var newPlanet = document.createElement('li');
    // filmPlanets.appendChild(newPlanet);

    for(var x = 0; x < results[i].planets.length; x++) {
    var planetAPI = results[i].planets[x];
    console.log(planetAPI)
    var planetReq = new XMLHttpRequest();
    planetReq.addEventListener('load', planetReqEventListener(filmPlanets));
    planetReq.open('GET', planetAPI);
    planetReq.send();

    }


  }
}


    function planetReqEventListener(filmPlanets) {


      return function() {
        console.log(this.responseText)
        var planet = JSON.parse(this.responseText);
        var planetName = planet.name;
        var newPlanet = document.createElement('li');
        filmPlanets.appendChild(newPlanet);
        var planetNameH4 = document.createElement('h4');
        newPlanet.appendChild(planetNameH4);
        planetNameH4.innerHTML = planetName;
      }

    }
