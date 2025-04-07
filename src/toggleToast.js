export default function toggleToast(message) {
  // Create a new div element for the toast
  const toastDiv = document.createElement("div");

  // Add the 'toast' class for styling
  toastDiv.classList.add("toast");

  // Set the text inside the toast
  toastDiv.innerText = message;

  // Append the toast to the body
  document.body.appendChild(toastDiv);

  // Add the 'show' class shortly after to trigger the slide-in animation
  setTimeout(() => {
    toastDiv.classList.add("show");
  });

  // After 2 seconds, remove the 'show' class to slide it out
  setTimeout(() => {
    toastDiv.classList.remove("show");

    // Wait for the transition to finish, then remove the element from the DOM
    setTimeout(() => {
      toastDiv.remove();
    }, 1000); // matches the transition duration
  }, 2000); // toast visible duration
}
