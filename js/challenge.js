// Get the counter element
const counter = document.querySelector("#counter");

// Create a timer function to increment the counter every second
let timer = setInterval(() => {
  counter.textContent++;
}, 1000);

// Add event listeners to the plus and minus buttons
document.querySelector("#plus").addEventListener("click", () => {
  counter.textContent++;
});

document.querySelector("#minus").addEventListener("click", () => {
  counter.textContent--;
});

// Add an event listener to the like button
document.querySelector("#heart").addEventListener("click", () => {
  // Get the current counter value
  const currentValue = counter.textContent;

  // Get the list of likes for the current counter value
  const likesList = document.querySelector(".likes");

  // Create a new like element
  const likeElement = document.createElement("li");
  likeElement.textContent = currentValue;

  // Add the new like element to the list
  likesList.appendChild(likeElement);
});

// Add an event listener to the pause button
document.querySelector("#pause").addEventListener("click", () => {
  // Pause the timer
  clearInterval(timer);

  // Disable all buttons except the pause button
  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    if (button !== document.querySelector("#pause")) {
      button.disabled = true;
    }
  }

  // Switch the label on the pause button to "resume"
  document.querySelector("#pause").textContent = "resume";
});

// Add an event listener to the restart button
document.querySelector("#restart").addEventListener("click", () => {
  // Restart the timer
  timer = setInterval(() => {
    counter.textContent++;
  }, 1000);

  // Re-enable all buttons
  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.disabled = false;
  }

  // Switch the label on the pause button to "pause"
  document.querySelector("#pause").textContent = "pause";
});

// Add an event listener to the comment form
document.querySelector("#comment-form").addEventListener("submit", (event) => {
  // Get the comment text
  const comment = document.querySelector("#comment-input").value;

  // Create a new comment element
  const commentElement = document.createElement("li");
  commentElement.textContent = comment;

  // Add the new comment element to the list
  const commentsList = document.querySelector("#list");
  commentsList.appendChild(commentElement);

  // Prevent the form from submitting
  event.preventDefault();
});
