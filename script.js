// Get the necessary HTML elements
const outputArea = document.getElementById('output-area');
const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');

// Event listener for submit button click
submitButton.addEventListener('click', processInput);

//event listener for enter key press on the input field
inputField.addEventListener('click', function(event) {
  if (event.key === 'Enter') {
    processInput();
  }
});

//this is where we process input affter submission
function processInput(){
  const input = inputField.value.trim();//remove whitespace
  inputField.value = '';//reset input text field
  //let's just append input to output text for now
  appendToOutput('> ' + input);
}

const appendToOutput = ((text) => {
  outputArea.innerHTML += text + '<br/>';
  outputArea.scrollTop = outputArea.scrollHeight//autoscrolls to the bottom
})
  
//Display a welcome message when the game starts
appendToOutput('Welcome to The Age of Intelligence! Enter commands to play the game.');