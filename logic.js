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

console.log("PAY ATTENTION:");
$(".integer").each(function(key,value) {
  console.log("key is:" + key + ", value is:" + value);
  value.onclick = function() {
    console.log(value.textContent);
  };
});
console.log("DONE");
console.log($(".integer"));

/*create a function which takes a CSS ID, like `$('#_1')`
 * and gets that id's TEXT content, and appends the 
 * text to an empty array (or an existing array), and puts that
 * in the `#results` css element's text.
*/


