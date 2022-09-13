const p = document.createElement('p');
// const body = document.querySelector('body');
const body = document.body;
// p.innerHTML = 'hello world';
p.textContent = 'hello world';
p.classList.add('text');
p.setAttribute('id', 'some-id');
body.appendChild(p);

// const img = document.createElement('img');
// const figure = document.querySelector('#image-holder');
// // img.setAttribute('src','https://picsum.photos/id/1060/200');
// img.src = 'https://picsum.photos/id/1060/200'
// img.alt = 'photo';
// img.width = 300;
// figure.appendChild(img);

const photo = document.createElement('img');
const figure = document.createElement('figure');

photo.src = 'https://picsum.photos/id/1060/200';

figure.appendChild(photo);
document.body.appendChild(figure);

// document.querySelector('h1').style.cssText = `
//       color: #f33;
//       background-color:#0f0;
//       text-align:center
//     `;


// document.querySelector('h1').style.cssText = `
// color: #f33;
// background-color:#0f0;
// text-align:center`;

// document.querySelector('body').style.setProperty('background-color','#f44')