  const hamburgerBtn = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');

  });
  
// Recomendación: esto va después de que hayas importado `data.js`
const container = document.querySelector('.main-content');

// Recorrer los posts y agregarlos al DOM
posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('main-content_post');
    postDiv.innerHTML = `
      <h3 class="post-card__title">${post.title}</h3>
      <p class="post-card__excerpt">${post.summary}</p>
      <img class="post-card__image" src="${post.image}" alt="${post.title}">
    `;  

    postDiv.addEventListener('click', () => {
        window.location.href = `post.html?id=${post.id}`;
    });

    container.appendChild(postDiv);
});
