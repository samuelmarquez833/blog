const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
const post = posts.find(p => p.id === postId);
const container = document.getElementById('post');

if (post) {
  container.innerHTML = `
        <h1>${post.title}</h1>
        <div class="post-content">
          <p>${post.content}</p>
        </div>
        <div class="convenient">
          <img class="post-card__image" src="${post.image}" alt="${post.title}">
        </div>
  `;
} else {
  container.innerHTML = '<p>Post no encontrado.</p>';
}
