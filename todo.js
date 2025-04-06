
// the below is just declaring variables
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// below creates a function with parameter of taskText and creates a list item and then changes the text of the list item it just created to the text of whatever task text is. it just creates the new list item with verbiage but does nothing with it
function createListItem(taskText) {
let listItem = document.createElement("li");
listItem.textContent = taskText;
return listItem;
}

// below assigns the value of tasktext to be whatever is input into the input field on the front end and then runs the createlistitem function which is essentialy just creating a new list item and then making its text match that of the tasktext variable. then it adds the newly created list items that matches the users inputted text in the field into the unorderred list box by using the append child function. lastly, it gets the taskinput variable's value and makes it blank so you can type something in it again.
function addTask() {
    let taskText = taskInput.value;
    let listItem = createListItem(taskText);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }

//   below was not part of the assignment but it was missing and the ultimate goal of this assignment was not working so i added it.
  addTaskButton.addEventListener("click", addTask);

  