// Get the necessary HTML elements
const outputArea = document.getElementById('output-area');
const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');

// Event listener for submit button click
submitButton.addEventListener('click', processInput);

//event listener for enter key press on the input field
inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    processInput();
  }
});

let currentLocation = 'home';

//this is where we process input affter submission
function processInput(){
  const input = inputField.value.trim().toLowerCase();//remove whitespace
  inputField.value = '';//reset input text field
  //handle user input based on current location
  switch(currentLocation){
    case 'home':
      handleHomeLocation(input);
      break
    case 'forest':
      handleForestLocation(input);
      break
    //todo: add more locations
    default:
      appendToOutput("Oops, you can't do anything here, try another location")
  }
}

//if user is home then...
function handleHomeLocation(input){
  switch (input) {
    case 'go forest':
      currentLocation = 'forest';
      appendToOutput("You venture into the forest");
      break;
      //todo:add more commands specific to when the player is at home
    default:
      appendToOutput("I am sorry, I don't understand that command");
  }
}
// Function to handle user input in the "forest" location
function handleForestLocation(input){
  switch(input) {
    case 'go home':
      currentLocation = 'home'
      appendToOutput("You return to your home")
      break;
    default:
      appendToOutput("Sorry, i don't understand that command")
  }
}



const appendToOutput = ((text) => {
  outputArea.innerHTML += text + '<br/>';
  outputArea.scrollTop = outputArea.scrollHeight//autoscrolls to the bottom
})