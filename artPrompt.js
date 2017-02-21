// Choose from list of species
// Choose from list of adjectives
// Choose from list of verbs (optional)
// Allow customizing of species?
//
// TODO: Learn how to import a list of words from a file and parse it
//
var animals_list;
var adj_list;

function readTextFile() {
  var requestor = new XMLHttpRequest();
  requestor.addEventListener("load", function() {
    console.log(this.responseText);
  });
  requestor.open("GET", "/toz/js/animals_list.txt");
  requestor.send();
  console.log("Ran readTextFile()");
}

jQuery.get('/toz/js/animals_list.txt', function(data) {
  animals_list = data;
});
jQuery.get('/toz/js/adj_full.txt', function(data) {
  adj_list = data;
});
console.log("Loaded the JS.");
console.log(animals_list);

