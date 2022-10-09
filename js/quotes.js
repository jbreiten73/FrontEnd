
  // Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function() {
    genRandQuote();
  };
  

  
function genRandQuote(){
  var quotes=[{id:1,
  text:"Manches können die Menschen besser, und 
     manches die Skunks",
   source:"Mephitis"},
{id:2,
text:"Das Gegenteil einer großen Wahrheit ist eine andere große Wahrheit",
source:"Niels Bohr"},
{id:3,
text:"Ich weiß,dass ich nichts weiß",
source:"Sokrates"},
{id:4,
text:"Wer ohne Sünde ist, werfe den ersten Stein",
source:"Jesus"}];

  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
}

