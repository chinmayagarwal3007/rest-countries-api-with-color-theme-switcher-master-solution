var xuv = 0;
var abcdef = 0;
const api_url = "https://restcountries.com/v3.1/all";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();

  for (var i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", data[i].name.common);
    card.addEventListener("click", showCountry);
    const image = document.createElement("div");
    image.setAttribute("class", "image");
    card.appendChild(image);
    const info = document.createElement("div");
    info.setAttribute("class", "info");
    var name = document.createElement("p");
    var text0 = document.createTextNode("");
    name.appendChild(text0);
    name.setAttribute("class", "name");
    var population = document.createElement("p");
    var text1 = document.createTextNode("Population: ");
    population.appendChild(text1);
    population.setAttribute("class", "population");
    var region = document.createElement("p");
    var text2 = document.createTextNode("Region: ");
    region.appendChild(text2);
    region.setAttribute("class", "region");
    var capital = document.createElement("p");
    var text3 = document.createTextNode("Capital: ");
    capital.appendChild(text3);
    capital.setAttribute("class", "capital");
    info.appendChild(name);
    info.appendChild(population);
    info.appendChild(region);
    info.appendChild(capital);
    card.appendChild(info);
    var element = document.getElementById("content");
    element.appendChild(card);
  }

  a = document.getElementsByClassName("info");
  for (let i = 0; i < a.length; i++) {
    a[i].getElementsByTagName("p")[0].innerHTML = data[i].name.common;

    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[i].population.toLocaleString());
    x.appendChild(t);
    x.setAttribute("class", "data");
    a[i].getElementsByTagName("p")[1].appendChild(x);

    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[i].region);
    x.appendChild(t);
    x.setAttribute("class", "data");
    a[i].getElementsByTagName("p")[2].appendChild(x);

    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[i].capital);
    x.appendChild(t);
    x.setAttribute("class", "data");
    a[i].getElementsByTagName("p")[3].appendChild(x);
  }
  b = document.getElementsByClassName("image");
  for (let i = 0; i < b.length; i++) {
    var img = document.createElement("img");
    img.setAttribute("class", "img");
    img.src = data[i].flags.png;
    b[i].appendChild(img);
  }

  c = document.getElementsByClassName("card");
}
getapi(api_url);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function continentAll() {
  document.getElementsByClassName("dropbtn")[0].innerHTML = "Filter by Region";
  const api_url = "https://restcountries.com/v3.1/all";
  var elem = document.getElementById("content");
  elem.parentNode.removeChild(elem);
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.setAttribute("class", "content");
  var element = document.getElementsByTagName("BODY")[0];
  element.appendChild(content);
  getapi(api_url);
  checkingTheme(1500);
}

function continentAfrica() {
  document.getElementsByClassName("dropbtn")[0].innerHTML = "Africa";
  const api_url = "https://restcountries.com/v3.1/region/africa";
  var elem = document.getElementById("content");
  elem.parentNode.removeChild(elem);
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.setAttribute("class", "content");
  var element = document.getElementsByTagName("BODY")[0];
  element.appendChild(content);
  getapi(api_url);
  checkingTheme(750);
}
function continentAmerica() {
  document.getElementsByClassName("dropbtn")[0].innerHTML = "America";
  const api_url = "https://restcountries.com/v3.1/region/america";
  var elem = document.getElementById("content");
  elem.parentNode.removeChild(elem);
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.setAttribute("class", "content");
  var element = document.getElementsByTagName("BODY")[0];
  element.appendChild(content);
  getapi(api_url);
  checkingTheme(750);
}
function continentAsia() {
  document.getElementsByClassName("dropbtn")[0].innerHTML = "Asia";
  const api_url = "https://restcountries.com/v3.1/region/asia";
  var elem = document.getElementById("content");
  elem.parentNode.removeChild(elem);
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.setAttribute("class", "content");
  var element = document.getElementsByTagName("BODY")[0];
  element.appendChild(content);
  getapi(api_url);
  checkingTheme(750);
}
function continentEurope() {
  document.getElementsByClassName("dropbtn")[0].innerHTML = "Europe";
  const api_url = "https://restcountries.com/v3.1/region/europe";
  var elem = document.getElementById("content");
  elem.parentNode.removeChild(elem);
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.setAttribute("class", "content");
  var element = document.getElementsByTagName("BODY")[0];
  element.appendChild(content);
  getapi(api_url);
  checkingTheme(750);
}
function continentOceania() {
  document.getElementsByClassName("dropbtn")[0].innerHTML = "Oceania";
  const api_url = "https://restcountries.com/v3.1/region/oceania";
  var elem = document.getElementById("content");
  elem.parentNode.removeChild(elem);
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.setAttribute("class", "content");
  var element = document.getElementsByTagName("BODY")[0];
  element.appendChild(content);
  getapi(api_url);
  checkingTheme(750);
}

function checkingTheme(a) {
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  async function test(b) {
    console.log("start timer");
    await delay(b);

    if (xuv % 2 === 0) {
      let y = document.getElementsByClassName("card").length;
      if (y !== 0) {
        for (let i = 0; i < y; i++) {
          document.getElementsByClassName("info")[i].style.backgroundColor =
            "hsl(209, 23%, 22%)";
          document.getElementsByClassName("name")[i].style.color = "white";
          document.getElementsByClassName("capital")[i].style.color =
            "hsl(0, 0%, 85%)";
          document.getElementsByClassName("region")[i].style.color =
            "hsl(0, 0%, 85%)";
          document.getElementsByClassName("population")[i].style.color =
            "hsl(0, 0%, 85%)";
          document.getElementsByClassName("data")[i].style.color =
            "hsl(0, 0%, 52%)";
        }
      }
    } else {
      let y = document.getElementsByClassName("card").length;
      if (y !== 0) {
        for (let i = 0; i < y; i++) {
          document.getElementsByClassName("info")[i].style.backgroundColor =
            "hsl(0, 0%, 100%)";
          document.getElementsByClassName("name")[i].style.color =
            "hsl(200, 15%, 8%)";
          document.getElementsByClassName("capital")[i].style.color =
            "hsl(200, 15%, 8%)";
          document.getElementsByClassName("region")[i].style.color =
            "hsl(200, 15%, 8%)";
          document.getElementsByClassName("population")[i].style.color =
            "hsl(200, 15%, 8%)";
          document.getElementsByClassName("data")[i].style.color = "black";
        }
      }
    }
  }
  test(a);
}

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const Country = document.getElementById("countryInput").value;
  const api_url = "https://restcountries.com/v3.1/name/" + Country;
  var elem = document.getElementById("content");
  elem.parentNode.removeChild(elem);
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.setAttribute("class", "content");
  var element = document.getElementsByTagName("BODY")[0];
  element.appendChild(content);
  getapi(api_url);
  
    function delay2(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  async function test2(b) {
    console.log("start timer");
    await delay2(b);
    if (document.getElementsByClassName("card").length == 0){
      alert("No such country");
    }
  }
  test2(1500);
  
});

function showCountry() {
  abcdef = 0;
  const api_url = "https://restcountries.com/v3.1/name/" + this.id;
  async function getcountry(url) {
    const response = await fetch(url);
    var data = await response.json();

    var elem = document.getElementById("filter_options");
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById("content");
    elem.parentNode.removeChild(elem);
    var soloContent = document.createElement("div");
    soloContent.setAttribute("id", "soloContent");
    soloContent.setAttribute("class", "soloContent");
    var backButton = document.createElement("div");
    backButton.setAttribute("class", "backButton");
    backButton.setAttribute("id", "backButton");
    var back = document.createElement("div");
    back.setAttribute("class", "back");
    back.addEventListener("click", takeBack);
    var name = document.createElement("p");
    var text0 = document.createTextNode("Back");
    name.setAttribute("class", "backText");
    name.appendChild(text0);
    back.appendChild(name);
    backButton.appendChild(back);
    var countryInformation = document.createElement("div");
    countryInformation.setAttribute("class", "countryInformation");
    countryInformation.setAttribute("id", "countryInformation");
    var flagImage = document.createElement("div");
    flagImage.setAttribute("class", "flagImage");
    var image = document.createElement("img");
    image.setAttribute("class", "flagImage");
    image.src = data[0].flags.png;
    flagImage.appendChild(image);
    var aboutCountry = document.createElement("div");
    aboutCountry.setAttribute("class", "aboutCountry");

    var aboutCountryName = document.createElement("div");
    aboutCountryName.setAttribute("class", "aboutCountryName");

    var name = document.createElement("h2");
    var text = document.createTextNode(data[0].name.common);
    name.appendChild(text);
    name.setAttribute("class", "mainName");
    aboutCountryName.appendChild(name);

    var aboutCountryInfo = document.createElement("div");
    aboutCountryInfo.setAttribute("class", "aboutCountryInfo");

    var aboutCountryInfoLeft = document.createElement("div");
    aboutCountryInfoLeft.setAttribute("class", "aboutCountryInfoLeft");

    var name = document.createElement("p");
    var text = document.createTextNode("Native Name : ");
    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[0].name.common);
    x.appendChild(t);
    x.setAttribute("class", "native");
    name.appendChild(text);
    name.appendChild(x);
    aboutCountryInfoLeft.appendChild(name);

    var name = document.createElement("p");
    var text = document.createTextNode("Population : ");
    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[0].population.toLocaleString());
    x.appendChild(t);
    x.setAttribute("class", "native");
    name.appendChild(text);
    name.appendChild(x);
    aboutCountryInfoLeft.appendChild(name);

    var name = document.createElement("p");
    var text = document.createTextNode("Region : ");
    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[0].region);
    x.appendChild(t);
    x.setAttribute("class", "native");
    name.appendChild(text);
    name.appendChild(x);
    aboutCountryInfoLeft.appendChild(name);

    var name = document.createElement("p");
    var text = document.createTextNode("Sub Region : ");
    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[0].subregion);
    x.appendChild(t);
    x.setAttribute("class", "native");
    name.appendChild(text);
    name.appendChild(x);
    aboutCountryInfoLeft.appendChild(name);

    var name = document.createElement("p");
    var text = document.createTextNode("Capital : ");
    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[0].capital[0]);
    x.appendChild(t);
    x.setAttribute("class", "native");
    name.appendChild(text);
    name.appendChild(x);
    aboutCountryInfoLeft.appendChild(name);

    aboutCountryInfo.appendChild(aboutCountryInfoLeft);

    var aboutCountryInfoRight = document.createElement("div");
    aboutCountryInfoRight.setAttribute("class", "aboutCountryInfoRight");

    var name = document.createElement("p");
    var text = document.createTextNode("Top Level Domain : ");
    var x = document.createElement("SPAN");
    var t = document.createTextNode(data[0].tld[0]);
    x.appendChild(t);
    x.setAttribute("class", "native");
    name.appendChild(text);
    name.appendChild(x);
    aboutCountryInfoRight.appendChild(name);

    var name = document.createElement("p");
    var text = document.createTextNode("Currencies : ");
    name.appendChild(text);
    var x = document.createElement("SPAN");
    var t = document.createTextNode(Object.values(data[0].currencies)[0].name);
    x.appendChild(t);
    x.setAttribute("class", "native");
    name.appendChild(x);

    aboutCountryInfoRight.appendChild(name);

    var name = document.createElement("p");
    var text = document.createTextNode("Language : ");
    name.appendChild(text);

    for (let i = 0; i < Object.values(data[0].languages).length; i++) {
      var x = document.createElement("SPAN");
      var t = document.createTextNode(Object.values(data[0].languages)[i]);
      x.appendChild(t);
      x.setAttribute("class", "native");
      name.appendChild(x);
      if (i !== Object.values(data[0].languages).length - 1) {
        var x = document.createElement("SPAN");
        var t = document.createTextNode(", ");
        x.appendChild(t);
        x.setAttribute("class", "native");
        name.appendChild(x);
      }
    }

    aboutCountryInfoRight.appendChild(name);

    aboutCountryInfo.appendChild(aboutCountryInfoRight);
    aboutCountry.appendChild(aboutCountryName);
    aboutCountry.appendChild(aboutCountryInfo);

    countryInformation.appendChild(flagImage);
    countryInformation.appendChild(aboutCountry);
    soloContent.appendChild(backButton);
    soloContent.appendChild(countryInformation);
    var element = document.getElementsByTagName("BODY")[0];
    element.appendChild(soloContent);

    var neighbours = document.createElement("div");
    neighbours.setAttribute("class", "neighbours");

    var borderText = document.createElement("div");
    borderText.setAttribute("class", "borderText");
    var name = document.createElement("p");
    var text = document.createTextNode("Border Countries : ");
    name.appendChild(text);
    borderText.appendChild(name);

    var borderCountries = document.createElement("div");
    borderCountries.setAttribute("class", "borderCountries");

    for (let i = 0; i < data[0].borders.length; i++) {
      var neighbourButton = document.createElement("button");
      neighbourButton.setAttribute("class", "neighbourButton");
      neighbourButton.innerHTML = data[0].borders[i];
      borderCountries.appendChild(neighbourButton);
    }

    neighbours.appendChild(borderText);
    neighbours.appendChild(borderCountries);

    aboutCountry.appendChild(neighbours);
  }
  getcountry(api_url);
  noNameLeft(500);
}

function noNameLeft(a) {
  function delay1(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  async function test1(b) {
    console.log("start timer");
    await delay1(b);

    if (xuv % 2 == 0) {
      document.getElementsByClassName("aboutCountryName")[0].style.color =
        "white";
      document.getElementsByClassName("aboutCountryInfo")[0].style.color =
        "hsl(0, 0%, 90%)";
      for (
        let i = 0;
        i < document.getElementsByClassName("native").length;
        i++
      ) {
        document.getElementsByClassName("native")[i].style.color =
          "hsl(0, 0%, 70%)";
      }
      document.getElementsByClassName("back")[0].style.backgroundColor =
        "hsl(209, 23%, 22%)";
      document.getElementsByClassName("back")[0].style.color = "white";
      document.getElementsByClassName("back")[0].style.boxShadow =
        "0px 0px 5px 3px rgb(23, 32, 41)";
      document.getElementsByClassName("back")[0].style.backgroundImage =
        "url('arrowLeft.png')";

      for (
        let i = 0;
        i < document.getElementsByClassName("neighbourButton").length;
        i++
      ) {
        document.getElementsByClassName("neighbourButton")[
          i
        ].style.backgroundColor = "hsl(209, 23%, 22%)";
        document.getElementsByClassName("neighbourButton")[i].style.boxShadow =
          "0px 0px 0px 1px rgb(23, 32, 41)";
        document.getElementsByClassName("neighbourButton")[i].style.color =
          "white";
        document.getElementsByClassName("neighbourButton")[i].style.border =
          "0 solid hsl(209, 23%, 22%)";
      }

      document.getElementsByClassName("borderText")[0].style.color =
        "hsl(0, 0%, 90%)";
    } else {
      document.getElementsByClassName("aboutCountryName")[0].style.color =
        "black";
      document.getElementsByClassName("aboutCountryInfo")[0].style.color =
        "hsl(200, 15%, 8%)";
      for (
        let i = 0;
        i < document.getElementsByClassName("native").length;
        i++
      ) {
        document.getElementsByClassName("native")[i].style.color =
          "hsl(0, 0%, 40%)";
      }
      document.getElementsByClassName("back")[0].style.backgroundColor =
        "hsl(0, 0%, 100%)";
      document.getElementsByClassName("back")[0].style.color = "black";
      document.getElementsByClassName("back")[0].style.boxShadow =
        "0px 0px 0px 2px rgba(0,0,0,0.14)";
      document.getElementsByClassName("back")[0].style.backgroundImage =
        "url('arrowLeftWhite.png')";

      for (
        i = 0;
        i < document.getElementsByClassName("neighbourButton").length;
        i++
      ) {
        document.getElementsByClassName("neighbourButton")[
          i
        ].style.backgroundColor = "hsl(0, 0%, 100%)";
        document.getElementsByClassName("neighbourButton")[i].style.boxShadow =
          "0px 0px 0px 2px rgba(0,0,0,0.14)";
        document.getElementsByClassName("neighbourButton")[i].style.color =
          "black";
        document.getElementsByClassName("neighbourButton")[i].style.border =
          "0 solid hsl(0, 0%, 100%)";
      }
      document.getElementsByClassName("borderText")[0].style.color =
        "hsl(200, 15%, 8%)";
    }
  }
  test1(a);
}

function takeBack() {
  abcdef = 1;
  var elem = document.getElementById("soloContent");
  elem.parentNode.removeChild(elem);
  var filter_options = document.createElement("div");
  filter_options.setAttribute("class", "filter_options");
  filter_options.setAttribute("id", "filter_options");
  var search = document.createElement("div");
  search.setAttribute("class", "search");
  var myForm = document.createElement("FORM");
  myForm.setAttribute("class", "myForm");
  var icon = document.createElement("INPUT");
  icon.setAttribute("class", "icon");
  icon.setAttribute("id", "countryInput");
  icon.setAttribute("name", "countryInput");
  icon.setAttribute("type", "text");
  icon.setAttribute("placeholder", "Search for a country...");
  var icon2 = document.createElement("INPUT");
  icon2.setAttribute("type", "submit");
  icon2.setAttribute("class", "icon2");
  myForm.appendChild(icon);
  myForm.appendChild(icon2);
  search.appendChild(myForm);
  filter_options.appendChild(search);
  var dropdown = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  var dropbtn = document.createElement("button");
  dropbtn.setAttribute("class", "dropbtn");
  dropbtn.innerHTML = "Filter by Region";
  dropbtn.addEventListener("click", myFunction);
  dropdown.appendChild(dropbtn);
  var myDropdown = document.createElement("div");
  myDropdown.setAttribute("id", "myDropdown");
  myDropdown.setAttribute("class", "dropdown-content");

  var All = document.createElement("a");
  All.setAttribute("class", "all");
  All.href = "#";
  All.innerHTML = "All";
  All.addEventListener("click", continentAll);
  myDropdown.appendChild(All);

  var Africa = document.createElement("a");
  Africa.setAttribute("class", "africa");
  Africa.href = "#";
  Africa.innerHTML = "Africa";
  Africa.addEventListener("click", continentAfrica);
  myDropdown.appendChild(Africa);

  var America = document.createElement("a");
  America.setAttribute("class", "america");
  America.href = "#";
  America.innerHTML = "America";
  America.addEventListener("click", continentAmerica);
  myDropdown.appendChild(America);

  var Asia = document.createElement("a");
  Asia.setAttribute("class", "asia");
  Asia.href = "#";
  Asia.innerHTML = "Asia";
  Asia.addEventListener("click", continentAsia);
  myDropdown.appendChild(Asia);

  var Europe = document.createElement("a");
  Europe.setAttribute("class", "europe");
  Europe.href = "#";
  Europe.innerHTML = "Europe";
  Europe.addEventListener("click", continentEurope);
  myDropdown.appendChild(Europe);

  var Oceania = document.createElement("a");
  Oceania.setAttribute("class", "oceania");
  Oceania.href = "#";
  Oceania.innerHTML = "Oceania";
  Oceania.addEventListener("click", continentOceania);
  myDropdown.appendChild(Oceania);

  dropdown.appendChild(myDropdown);
  filter_options.appendChild(dropdown);

  const content = document.createElement("div");
  content.setAttribute("id", "content");
  content.setAttribute("class", "content");

  var element = document.getElementsByTagName("BODY")[0];
  element.appendChild(filter_options);
  element.appendChild(content);
  const api_url = "https://restcountries.com/v3.1/all";
  getapi(api_url);
  checkingTheme(1500);
  checkingThemeforToolbar();
}

function themeChanger() {
  xuv += 1;
  console.log(xuv);
  if (xuv % 2 == 0) {
    if (abcdef === 1) {
      document.getElementsByClassName("icon2")[0].style.color =
        "hsl(207, 26%, 17%)";
      document.getElementsByClassName("icon2")[0].style.backgroundColor =
        "hsl(207, 26%, 17%)";
      document.getElementsByClassName("icon2")[0].style.border =
        "0 solid hsl(207, 26%, 17%)";
    }
    document.getElementsByTagName("BODY")[0].style.backgroundColor =
      "hsl(207, 26%, 17%)";
    document.getElementsByClassName("toolbar")[0].style.backgroundColor =
      "hsl(209, 23%, 22%)";
    document.getElementsByClassName("where_to")[0].style.color = "white";
    document.getElementsByClassName("mode_type")[0].style.color = "white";
    document.getElementsByClassName("moon")[0].src = "moon.png";
    let x = document.getElementsByClassName("filter_options").length;
    if (x !== 0) {
      document.getElementsByClassName("icon")[0].style.backgroundImage =
        "url('search.png')";
      document.getElementsByClassName("dropbtn")[0].style.backgroundImage =
        "url('arrow.png')";
      document.getElementsByClassName("icon")[0].style.backgroundColor =
        "hsl(209, 23%, 22%)";
      document.getElementsByClassName("icon")[0].style.color = "white";
      document
        .querySelector("input[type=text]")
        .style.setProperty("--c", "white");
      document.getElementsByClassName(
        "dropdown-content"
      )[0].style.backgroundColor = "hsl(209, 23%, 22%)";
      document.getElementsByClassName("dropbtn")[0].style.backgroundColor =
        "hsl(209, 23%, 22%)";
      document.getElementsByClassName("dropbtn")[0].style.color =
        "hsl(0, 0%, 80%)";
      document.getElementsByClassName("all")[0].style.color = "hsl(0, 0%, 80%)";
      document.getElementsByClassName("asia")[0].style.color =
        "hsl(0, 0%, 80%)";
      document.getElementsByClassName("america")[0].style.color =
        "hsl(0, 0%, 80%)";
      document.getElementsByClassName("africa")[0].style.color =
        "hsl(0, 0%, 80%)";
      document.getElementsByClassName("europe")[0].style.color =
        "hsl(0, 0%, 80%)";
      document.getElementsByClassName("oceania")[0].style.color =
        "hsl(0, 0%, 80%)";
    }
    let y = document.getElementsByClassName("card").length;
    if (y !== 0) {
      for (let i = 0; i < y; i++) {
        document.getElementsByClassName("info")[i].style.backgroundColor =
          "hsl(209, 23%, 22%)";
        document.getElementsByClassName("name")[i].style.color = "white";
        document.getElementsByClassName("capital")[i].style.color =
          "hsl(0, 0%, 85%)";
        document.getElementsByClassName("region")[i].style.color =
          "hsl(0, 0%, 85%)";
        document.getElementsByClassName("population")[i].style.color =
          "hsl(0, 0%, 85%)";
        document.getElementsByClassName("data")[i].style.color =
          "hsl(0, 0%, 52%)";
      }
    }

    let z = document.getElementsByClassName("soloContent").length;
    if (z !== 0) {
      document.getElementsByClassName("aboutCountryName")[0].style.color =
        "white";
      document.getElementsByClassName("aboutCountryInfo")[0].style.color =
        "hsl(0, 0%, 90%)";
      for (
        let i = 0;
        i < document.getElementsByClassName("native").length;
        i++
      ) {
        document.getElementsByClassName("native")[i].style.color =
          "hsl(0, 0%, 70%)";
      }
      document.getElementsByClassName("back")[0].style.backgroundColor =
        "hsl(209, 23%, 22%)";
      document.getElementsByClassName("back")[0].style.color = "white";
      document.getElementsByClassName("back")[0].style.boxShadow =
        "0px 0px 5px 3px rgb(23, 32, 41)";
      document.getElementsByClassName("back")[0].style.backgroundImage =
        "url('arrowLeft.png')";

      for (
        let i = 0;
        i < document.getElementsByClassName("neighbourButton").length;
        i++
      ) {
        document.getElementsByClassName("neighbourButton")[
          i
        ].style.backgroundColor = "hsl(209, 23%, 22%)";
        document.getElementsByClassName("neighbourButton")[i].style.boxShadow =
          "0px 0px 0px 1px rgb(23, 32, 41)";
        document.getElementsByClassName("neighbourButton")[i].style.color =
          "white";
        document.getElementsByClassName("neighbourButton")[i].style.border =
          "0 solid hsl(209, 23%, 22%)";
      }

      document.getElementsByClassName("borderText")[0].style.color =
        "hsl(0, 0%, 90%)";
    }
  } else {
    if (abcdef === 1) {
      document.getElementsByClassName("icon2")[0].style.color =
        "rgb(230,230,230)";
      document.getElementsByClassName("icon2")[0].style.backgroundColor =
        "rgb(230,230,230)";
      document.getElementsByClassName("icon2")[0].style.border =
        "0 solid rgb(230,230,230)";
    }
    document.getElementsByTagName("BODY")[0].style.backgroundColor =
      "hsl(0, 0%, 90%)";
    document.getElementsByClassName("toolbar")[0].style.backgroundColor =
      "hsl(0, 0%, 100%)";
    document.getElementsByClassName("where_to")[0].style.color =
      "hsl(200, 15%, 8%)";
    document.getElementsByClassName("mode_type")[0].style.color =
      "hsl(200, 15%, 8%)";
    document.getElementsByClassName("moon")[0].src = "moonWhite.png";
    let x = document.getElementsByClassName("filter_options").length;
    if (x !== 0) {
      document.getElementsByClassName("icon")[0].style.backgroundImage =
        "url('searchWhite.png')";
      document.getElementsByClassName("dropbtn")[0].style.backgroundImage =
        "url('arrowWhite.png')";
      document.getElementsByClassName("icon")[0].style.backgroundColor =
        "hsl(0, 0%, 100%)";
      document.getElementsByClassName("icon")[0].style.color = "black";
      document
        .querySelector("input[type=text]")
        .style.setProperty("--c", "black");
      document.getElementsByClassName(
        "dropdown-content"
      )[0].style.backgroundColor = "hsl(0, 0%, 100%)";
      document.getElementsByClassName("dropbtn")[0].style.backgroundColor =
        "hsl(0, 0%, 100%)";
      document.getElementsByClassName("dropbtn")[0].style.color = "black";
      document.getElementsByClassName("all")[0].style.color = "black";
      document.getElementsByClassName("asia")[0].style.color = "black";
      document.getElementsByClassName("america")[0].style.color = "black";
      document.getElementsByClassName("africa")[0].style.color = "black";
      document.getElementsByClassName("europe")[0].style.color = "black";
      document.getElementsByClassName("oceania")[0].style.color = "black";
    }
    let y = document.getElementsByClassName("card").length;
    if (y !== 0) {
      for (let i = 0; i < y; i++) {
        document.getElementsByClassName("info")[i].style.backgroundColor =
          "hsl(0, 0%, 100%)";
        document.getElementsByClassName("name")[i].style.color =
          "hsl(200, 15%, 8%)";
        document.getElementsByClassName("capital")[i].style.color =
          "hsl(200, 15%, 8%)";
        document.getElementsByClassName("region")[i].style.color =
          "hsl(200, 15%, 8%)";
        document.getElementsByClassName("population")[i].style.color =
          "hsl(200, 15%, 8%)";
        document.getElementsByClassName("data")[i].style.color = "black";
      }
    }

    let z = document.getElementsByClassName("soloContent").length;
    if (z !== 0) {
      document.getElementsByClassName("aboutCountryName")[0].style.color =
        "black";
      document.getElementsByClassName("aboutCountryInfo")[0].style.color =
        "hsl(200, 15%, 8%)";
      for (
        let i = 0;
        i < document.getElementsByClassName("native").length;
        i++
      ) {
        document.getElementsByClassName("native")[i].style.color =
          "hsl(0, 0%, 40%)";
      }
      document.getElementsByClassName("back")[0].style.backgroundColor =
        "hsl(0, 0%, 100%)";
      document.getElementsByClassName("back")[0].style.color = "black";
      document.getElementsByClassName("back")[0].style.boxShadow =
        "0px 0px 0px 2px rgba(0,0,0,0.14)";
      document.getElementsByClassName("back")[0].style.backgroundImage =
        "url('arrowLeftWhite.png')";

      for (
        i = 0;
        i < document.getElementsByClassName("neighbourButton").length;
        i++
      ) {
        document.getElementsByClassName("neighbourButton")[
          i
        ].style.backgroundColor = "hsl(0, 0%, 100%)";
        document.getElementsByClassName("neighbourButton")[i].style.boxShadow =
          "0px 0px 0px 2px rgba(0,0,0,0.14)";
        document.getElementsByClassName("neighbourButton")[i].style.color =
          "black";
        document.getElementsByClassName("neighbourButton")[i].style.border =
          "0 solid hsl(0, 0%, 100%)";
      }
      document.getElementsByClassName("borderText")[0].style.color =
        "hsl(200, 15%, 8%)";
    }
  }
}

function checkingThemeforToolbar() {
  if (xuv % 2 === 0) {
    document.getElementsByClassName("icon")[0].style.backgroundImage =
      "url('search.png')";
    document.getElementsByClassName("dropbtn")[0].style.backgroundImage =
      "url('arrow.png')";
    document.getElementsByClassName("icon")[0].style.backgroundColor =
      "hsl(209, 23%, 22%)";
    document.getElementsByClassName("icon")[0].style.color = "white";
    document
      .querySelector("input[type=text]")
      .style.setProperty("--c", "white");
    document.getElementsByClassName(
      "dropdown-content"
    )[0].style.backgroundColor = "hsl(209, 23%, 22%)";
    document.getElementsByClassName("dropbtn")[0].style.backgroundColor =
      "hsl(209, 23%, 22%)";
    document.getElementsByClassName("dropbtn")[0].style.color =
      "hsl(0, 0%, 80%)";
    document.getElementsByClassName("all")[0].style.color = "hsl(0, 0%, 80%)";
    document.getElementsByClassName("asia")[0].style.color = "hsl(0, 0%, 80%)";
    document.getElementsByClassName("america")[0].style.color =
      "hsl(0, 0%, 80%)";
    document.getElementsByClassName("africa")[0].style.color =
      "hsl(0, 0%, 80%)";
    document.getElementsByClassName("europe")[0].style.color =
      "hsl(0, 0%, 80%)";
    document.getElementsByClassName("oceania")[0].style.color =
      "hsl(0, 0%, 80%)";
    document.getElementsByClassName("icon2")[0].style.color =
      "hsl(207, 26%, 17%)";
    document.getElementsByClassName("icon2")[0].style.backgroundColor =
      "hsl(207, 26%, 17%)";
    document.getElementsByClassName("icon2")[0].style.border =
      "0 solid hsl(207, 26%, 17%)";
  } else {
    document.getElementsByClassName("icon")[0].style.backgroundImage =
      "url('searchWhite.png')";
    document.getElementsByClassName("dropbtn")[0].style.backgroundImage =
      "url('arrowWhite.png')";
    document.getElementsByClassName("icon")[0].style.backgroundColor =
      "hsl(0, 0%, 100%)";
    document.getElementsByClassName("icon")[0].style.color = "black";
    document
      .querySelector("input[type=text]")
      .style.setProperty("--c", "black");
    document.getElementsByClassName(
      "dropdown-content"
    )[0].style.backgroundColor = "hsl(0, 0%, 100%)";
    document.getElementsByClassName("dropbtn")[0].style.backgroundColor =
      "hsl(0, 0%, 100%)";
    document.getElementsByClassName("dropbtn")[0].style.color = "black";
    document.getElementsByClassName("all")[0].style.color = "black";
    document.getElementsByClassName("asia")[0].style.color = "black";
    document.getElementsByClassName("america")[0].style.color = "black";
    document.getElementsByClassName("africa")[0].style.color = "black";
    document.getElementsByClassName("europe")[0].style.color = "black";
    document.getElementsByClassName("oceania")[0].style.color = "black";
    document.getElementsByClassName("icon2")[0].style.color =
      "rgb(230,230,230)";
    document.getElementsByClassName("icon2")[0].style.backgroundColor =
      "rgb(230,230,230)";
    document.getElementsByClassName("icon2")[0].style.border =
      "0 solid rgb(230,230,230)";
  }
}
