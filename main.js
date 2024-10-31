const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const userId = 'gwnpunkband'; 
const accessToken = 'IGQWRQQndpUWZAnaV9ZAODdvbzdCQTNWd3RnOUF1ZAFNUYW1vM1lJQVU5V1M4ZAUFpR1NpSmp6bDF6TGM0T2d3aldhQVVadWYtaWdnQTRkR1VlR2xld0hGblozQ0pYQTRBQ3pQNDRUenk0bEpEbXY2OWZA4TFQxOUEyM0kZD'; // Wstaw tutaj swój access-token

fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`)
    .then(response => response.json())
    .then(data => {
        const feedContainer = document.getElementById('instagram-feed');
        data.data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
          <a href="${post.permalink}" target="_blank">
            <img src="${post.media_url}" alt="${post.caption}" />
          </a>
        `;
            feedContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error fetching Instagram feed:', error));