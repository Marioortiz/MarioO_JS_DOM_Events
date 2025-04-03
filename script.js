
// this sets the buttonchange variable to the button with the id of clickMe

let buttonChange = document.getElementById("clickMe");
// this checks html and listens or checks for a click event on the buttonchange variable which is the button with clickMe ID

buttonChange.addEventListener("click", function() {
    // this changes the value of buttonchange variable which is the button with the id of clickMe in the HTML to You clicked me!

  buttonChange.innerText = "You clicked me!";
});



function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
}

document.getElementById("randomColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

