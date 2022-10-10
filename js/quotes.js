window.onload=go;
function go(){
  // Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function() {
    genRandQuote();
  });
  genRandQuote();
}
  
function genRandQuote(){
  let colors=["blue","yellow","red","green","orange","magenta","cyan"];
  var quotes=[{text: "Quote 1",
source: "Source 1"},
{text: "Quote 2", source: "Source 2"},
{text: "Quote 3", source: "Source 3"},
{text: "Quote 4", source: "Source 4"},
{text: "Quote 5", source: "Source 5"}];

  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  var randColor1=colors[Math.floor(Math.random()*(colors.length))];
  var randColor2=colors[Math.floor(Math.random()*(colors.length))];
 $("#text").html(randQuote.text);
  $("#text").css("color", randColor1);
  $("#author").html(randQuote.source);
  $("#author").css("color", randColor2);
}

