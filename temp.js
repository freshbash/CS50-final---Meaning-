// function getWord(){
//     var word = "";
//     // Get the active element inside which the selected string resides.
//     var activeEl = document.activeElement;
//     // Get the type of the selected element, if any.
//     var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;

//     // If the selected element is of the type "textarea" or "input" store the input in word as it is.
//     if ((activeElTagName === "textarea") || (activeElTagName === "input" &&
//     /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
//     (typeof activeEl.selectionStart === "number")) {

//         word = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
//     }

//     // If the active element is of type other than those in the first case, then convert the highlighted text to string
//     // and store it in word.
//     else if (window.getSelection){

//         word = window.getSelection().toString();
//     }

//     // Check if the length of the string is greater than the longest word in english.
//     if (word.length > 45){
//         return null;
//     }

//     // Remove whitespaces from the front and back of the word, if exists.
//     if (word[0] == " "){
//         word = word.slice(1, word.length);
//     }

//     if (word[word.length - 1] === " "){
//         word = word.slice(0, word.length - 1);
//     }

//     // Check if the string contains more than one word.
//     let idx = word.indexOf(" ");
//     if (idx > 0 && idx < word.length){
//         return null;
//     }

//     // Return the inputed word
//     // return word;

//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     .then((response) => response.json())
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {       
//     });
// }


// document.onmouseup = document.onkeyup = document.onselectionchange = function() {
//     let input = getWord();

//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
//     .then((response) => response.json())
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {       
//     });
// }