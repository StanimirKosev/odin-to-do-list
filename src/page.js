// initial page layout 

function pageLayout(){
const parent = document.getElementById('parent');

const header = document.createElement('div');
header.textContent = 'To-do List';
parent.appendChild(header).className = 'header';

const tick = document.createElement('img');
tick.src = 'pictures/check.png';
tick.alt = 'check-pic';
header.appendChild(tick);

const sidebar = document.createElement('div');
parent.appendChild(sidebar).className = 'sidebar';

const main = document.createElement('div');
parent.appendChild(main).className = 'main';

const footer = document.createElement('div');
parent.appendChild(footer).className = 'footer';
}

export { pageLayout }; 