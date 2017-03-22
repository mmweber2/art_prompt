// Choose from list of species
// Choose from list of adjectives
// Choose from list of verbs (optional)
// Allow customizing of species? (Categorize species, no fish, etc)
//
//Set once and just choose another random option from the same list each randomization
var animalsList;
var adjList;
var DICT_URL = "<a href=\"http://www.freedictionary.org/?Query=";

function pickRandom(list) {
  var randInt = Math.random();
  randInt *= list.length;
  return list[Math.floor(randInt)];
}

function getPrompt() {
  var adj_result = pickRandom(adjList);
  var adj_link = DICT_URL + "" + adj_result + "\" target=\"_blank\">" + adj_result + "</a>";
  var animal = pickRandom(animalsList).split("|");
  var animal_link = "<a href=\"" + animal[1] + "\" target=\"_blank\">" + animal[0] + "</a>";
  var full_result = adj_link + " " + animal_link;
  document.getElementById("animal_result").innerHTML = animal_link;
  document.getElementById("adj_result").innerHTML = adj_link;
  document.getElementById("full_result").innerHTML = full_result;
}

// Only call once per page load
// Nest both jQuery calls because we need access to both data groups
jQuery.get('/toz/js/animals_list.txt', function(data) {
  animalsList = data.split("\n");
  jQuery.get('/toz/js/adj_full.txt', function(adjs) {
    adjList = adjs.split("\n");
    getPrompt();
  });
});
