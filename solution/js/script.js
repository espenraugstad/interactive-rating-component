const review1 = document.getElementById("review1");
const review2 = document.getElementById("review2");
const review3 = document.getElementById("review3");
const review4 = document.getElementById("review4");
const review5 = document.getElementById("review5");
const submitBtn = document.getElementById("submitBtn");
const rating = document.getElementById("rating");

review1.addEventListener("click", selectReview);
review2.addEventListener("click", selectReview);
review3.addEventListener("click", selectReview);
review4.addEventListener("click", selectReview);
review5.addEventListener("click", selectReview);

function selectReview(e) {
  // Get all elements with the class selected, and remove that class from them
  let selectedElements = document.querySelectorAll(".selected");
  selectedElements.forEach((e) => e.classList.remove("selected"));

  // Add class selected to the clicked element.
  e.target.classList.add("selected");
}

submitBtn.addEventListener("click", () => {
  // Get all elements with the class selected
  let selectedElements = document.querySelectorAll(".selected");

  // If there are more than 1 selected elements, something went wrong:
  if (selectedElements.length > 1) {
    alert("Something went wrong. Refresh the page and try again.");
    return;
  } else if (selectedElements.length === 0) {
    // No review has been selected, don't continue.
    return;
  }

  // Get the first element of the selected elements
  let review = selectedElements[0].id;

  // The last character is the rating:
  let ratingValue = review.slice(-1);
  rating.innerHTML = `You selected ${ratingValue} out of 5`;

  // Hide review panel
  const start = document.getElementById("start");
  start.classList.add("hidden");

  // Show thank you panel
  const thankYou = document.getElementById("thank-you");
  thankYou.classList.remove("hidden");
});
