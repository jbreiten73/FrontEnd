  $("#new-quote").click(genRandQuote);
function genRandQuote(){
     let quotes=[{text:"Manches können die Menschen besser, und 
     manches die Skunks",source:"Mephitis"},
{text:"Das Gegenteil einer großen Wahrheit ist eine andere große Wahrheit",
source:"Niels Bohr"},
{text:"Ich weiß,dass ich nichts weiß",source:"Sokrates"},
{text:"Wer ohne Sünde ist, werde den ersten Stein",
source:"Jesus"}];

  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);};
