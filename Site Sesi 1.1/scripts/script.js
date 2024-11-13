const modal = document.querySelector(".modal");
const readMoreBtn = document.querySelector(".read-more");

readMoreBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

document.addEventListener("click", (event) => {
    if (!readMoreBtn.contains(event.target)) modal.style.display = "none";
});