/*
Skip to content
jbreiten73
/
FrontEnd
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
FrontEnd/javascript/random.js
@jbreiten73
jbreiten73 Update random.js
 1 contributor
25 lines (21 sloc)  781 Bytes*/
 window.onload = go;
function go() {
  // Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function() {
    genRandQuote();
  });
  
  // Generate a random quote when window is loaded initially
  genRandQuote();
}

  
function genRandQuote(){
  let quotes=[{id:1,text:"Manches können die Menschen besser, und 
     manches die Skunks",source:"Mephitis"},
{id:2,text:"Das Gegenteil einer großen Wahrheit ist eine andere große Wahrheit",
source:"Niels Bohr"},
{id:3,text:"Ich weiß,dass ich nichts weiß",source:"Sokrates"},
{id:4,text:"Wer ohne Sünde ist, werfe den ersten Stein",
source:"Jesus"},];

  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
}
/*
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
FrontEnd/random.js at main · jbreiten73/FrontEnd*/
