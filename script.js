
// this sets the buttonchange variable to the button with the id of clickMe

let buttonChange = document.getElementById("clickMe");
// this checks html and listens or checks for a click event on the buttonchange variable which is the button with clickMe ID

buttonChange.addEventListener("click", function() {
    // this changes the value of buttonchange variable which is the button with the id of clickMe in the HTML to You clicked me!

  buttonChange.innerText = "You clicked me!";
});


// below is the the random background color generator
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
}

document.getElementById("randomColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});



// below is the button that changes glow on click
function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   }


// below is the dark mode toggle
function changetodark() {
    let darktoggle = document.querySelector(".dark");
    
    // Toggle a class (e.g., "dark-mode") on the body or another element
    document.body.classList.toggle("dark-mode");

    // Change button text based on the presence of the class
    if (document.body.classList.contains("dark-mode")) {
        darktoggle.innerHTML = "Light Mode";
    } else {
        darktoggle.innerHTML = "Dark Mode";
    }
}