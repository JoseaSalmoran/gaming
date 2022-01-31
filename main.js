document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news', {delay: 500});
ScrollReveal().reveal('.banner', {delay: 500});
ScrollReveal().reveal('.banner-two', {delay: 500});

// const HTMLResponse = document.querySelector('#app');
// const ul = document.createElement('ul');

// fetch('${API_URL}/users')
// .then((response) => response.json())
// .then((users) =>{
//     users.forEach((user) => {
//         let elem = document.createElement('li');
//         elem.appendChild(
//             document.createTextNode('$[user.name] $[user.email]')
//         );
//         ul.appendChild(elem);
//     });

//     HTMLResponse.appendChild(ul);
// })

