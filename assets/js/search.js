const input = document.getElementById("search-input");
const results = document.getElementById("search-results");

fetch("/search.json")
  .then(response => response.json())
  .then(posts => {
    input.addEventListener("input", () => {
      const query = input.value.toLowerCase().trim();
      results.innerHTML = "";

      if (query.length < 2) {
        return;
      }

      const matches = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        results.innerHTML = "<li>No results found.</li>";
        return;
      }

      matches.forEach(post => {
        const li = document.createElement("li");

        li.innerHTML = `
          <a href="${post.url}">${post.title}</a>
          <br>
          <span class="post-date">${post.date}</span>
        `;

        results.appendChild(li);
      });
    });
  });
