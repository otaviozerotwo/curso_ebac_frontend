document.addEventListener('DOMContentLoaded', function() {
  const avatarElement = document.querySelector('#avatar');
  const nameElement = document.querySelector('#name');
  const usernameElement = document.querySelector('#username');
  const reposElement = document.querySelector('#repos');
  const followersElement = document.querySelector('#followers');
  const followingElement = document.querySelector('#following')
  const linkElement = document.querySelector('#link');

  fetch('https://api.github.com/users/otaviozerotwo')
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      avatarElement.src = json.avatar_url;
      nameElement.innerHTML = json.name;
      usernameElement.innerHTML = json.login;
      reposElement.innerHTML = json.public_repos;
      followersElement.innerHTML = json.followers;
      followingElement.innerHTML = json.following;
      linkElement.href = json.html_url;
    })
})