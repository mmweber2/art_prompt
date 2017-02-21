// Choose from list of species
// Choose from list of adjectives
// Choose from list of verbs (optional)
// Allow customizing of species? (Categorize species, no fish, etc)
//
// TODO: Pick random item from both pools
//
var adj_list;

// Nest both jQuery calls because we need access to both data groups
jQuery.get('/toz/js/animals_list.txt', function(data) {
  var animals_list = data.split("\n");
  //for (var line = 0; line < animals_list.length; line++) {
  jQuery.get('/toz/js/adj_full.txt', function(adjs) {
    adj_list = adjs.split("\n");
    for (var line = 0; line < 5; line++) {
      console.log(adj_list[line]);
    }
    for (var line = 0; line < 5; line++) {
      console.log(animals_list[line]);
    }
  });
});
