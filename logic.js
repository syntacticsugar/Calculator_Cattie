console.log("huh?");
console.log('why');

var one = document.getElementById("_1");
console.log(one);

$("#_1").click(function() {
  $("#results").text( "bicky" )
});

$("#_2").click(function() {
  $("#results").text( "2" )
});

$("#_3").click(function() {
  $("#results").text( "3" )
});

/*create a function which takes a CSS ID, like `$('#_1')`
 * and gets that id's TEXT content, and appends the 
 * text to an empty array (or an existing array), and puts that
 * in the `#results` css element's text.
*/


