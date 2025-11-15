document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("alertForm");
  const list = document.getElementById("alertList");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const date = document.getElementById("date").value;

    if (!title || !description || !date) return alert("Please fill all fields!");

    // Remove placeholder text
    const emptyMsg = list.querySelector(".empty-text");
    if (emptyMsg) emptyMsg.remove();

    // Create alert card
    const card = document.createElement("div");
    card.classList.add("alert-card");

    card.innerHTML = `
      <button class="delete-btn" title="Delete alert">&times;</button>
      <h3>${title}</h3>
      <p>${description}</p>
      <small>📅 ${date}</small>
    `;

    // Add delete functionality
    card.querySelector(".delete-btn").addEventListener("click", () => {
      card.remove();
      if (list.children.length === 0) {
        list.innerHTML = <p class="empty-text">No alerts yet — add one above!</p>;
      }
    });

    // Add card to list
    list.appendChild(card);

    // Clear form
    form.reset();
  });
});