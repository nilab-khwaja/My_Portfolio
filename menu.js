const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
const body = document.querySelector('body');
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('scroll-lock');
}
hamburger.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('scroll-lock');
}
navLink.forEach((n) => n.addEventListener('click', closeMenu));

// start working on popup menu

// Limit the number of words in Paragraphs
function limitWords(paragraph, limit) {
  const words = paragraph.split(' ');
  if (words.length <= limit) return paragraph;

  const limitedWords = words.slice(0, limit);

  let limitedParagraph = limitedWords.join(' ');

  limitedParagraph += '...';

  return limitedParagraph;
}

//  Cards data
const projects = [
  {
    id: 1,
    title: 'To-Do list',
    company: 'Dev',
    post: 'Front End Dev',
    year: '2023',
    image: 'img/new project for portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      '"To-do list" is a tool that helps to organize your day.',
    details:
      'The to-do application built using JavaScript, HTML, and CSS is a powerful tool designed to help users organize their daily tasks efficiently. With its intuitive user interface and robust functionality, this application allows users to add activities to their daily schedule and mark them as complete once they are finished. The app primary feature is its ability to organize a day by adding activities into a task list. Users can easily add new tasks by typing them into the input field provided.Once a task is completed, users can mark it as done by clicking on the checkbox next to it. This feature helps users keep track of their progress and stay motivated throughout the day.In addition to marking tasks as complete, the app also provides users with the ability to edit or delete tasks as needed. This feature ensures that users can make changes to their schedule quickly and easily without having to start over from scratch.',
    liveVersion: 'https://nilab-khwaja.github.io/To-Do-List/',
    githubLink: 'https://github.com/nilab-khwaja/To-Do-List',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    post: 'Full Stack Dev',
    year: '2015',
    image: 'img/desktop2.jpg',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.',
    liveVersion: 'https://nilab-khwaja.github.io/My_Portfolio/',
    githubLink: 'https://github.com/nilab-khwaja/My_Portfolio',
  },
  {
    id: 3,
    title: 'Facebook 360',
    company: 'FACEBOOK',
    post: 'Back End Dev',
    year: '2017',
    image: 'img/desktop3.jpg',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.',
    liveVersion: 'https://nilab-khwaja.github.io/My_Portfolio/',
    githubLink: 'https://github.com/nilab-khwaja/My_Portfolio',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    company: 'UBER',
    post: 'Full End Dev',
    year: '2019',
    image: 'img/desktop4.jpg',
    technologies: ['html', 'css', 'php', 'javascript'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.',
    liveVersion: 'https://nilab-khwaja.github.io/My_Portfolio/',
    githubLink: 'https://github.com/nilab-khwaja/My_Portfolio',
  },
];

// Get the container element
const container = document.getElementById('works-container');

// Loop the cards
for (let i = 0; i < projects.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('card-img');
  image.src = projects[i].image;
  image.alt = `work-${i + 1}`;
  card.appendChild(image);

  const details = document.createElement('div');
  details.classList.add('card-details');
  card.appendChild(details);

  const item = document.createElement('div');
  item.classList.add('card-item-mg');
  details.appendChild(item);

  const title = document.createElement('h3');
  title.classList.add('card-title');
  title.textContent = projects[i].title;
  item.appendChild(title);

  const info = document.createElement('div');
  info.classList.add('card-info');
  item.appendChild(info);

  const company = document.createElement('span');
  company.classList.add('info-active');
  company.textContent = projects[i].company;
  info.appendChild(company);

  const dot1 = document.createElement('img');
  dot1.src = 'img/dot.svg';
  dot1.alt = 'dot';
  info.appendChild(dot1);

  const role = document.createElement('span');
  role.textContent = projects[i].post;
  info.appendChild(role);

  const dot2 = document.createElement('img');
  dot2.src = 'img/dot.svg';
  dot2.alt = 'dot';
  info.appendChild(dot2);

  const year = document.createElement('span');
  year.textContent = projects[i].year;
  info.appendChild(year);

  const description = document.createElement('p');
  description.classList.add('card-descrip', 'card-item-mg');
  const parag = projects[i].description;
  description.textContent = limitWords(parag, 18);
  details.appendChild(description);

  const tags = document.createElement('ul');
  tags.classList.add('card-tags', 'card-item-mg');
  details.appendChild(tags);

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const tag = document.createElement('li');
    tag.classList.add('card-tag');
    tag.textContent = projects[i].technologies[j];
    tags.appendChild(tag);
  }

  const action = document.createElement('div');
  action.classList.add('card-action');
  details.appendChild(action);

  const button = document.createElement('button');
  button.classList.add('card-btn');
  button.id = `card-${projects[i].id}`;
  button.textContent = 'See Project';
  action.appendChild(button);

  container.appendChild(card);
}

const ProjectPopup = (
  id,
  title,
  company,
  post,
  year,
  image,
  technologies,
  details,
  liveVersion,
  githubLink,
) => {
  let technologyList = '';
  for (let i = 0; i < technologies.length; i += 1) {
    technologyList += `<li class="card-tag">${technologies[i]}</li>`;
  }

  return `<div class="pop-head">
  <div class="pop-head-container">
    <h3 class="card-title">${title}</h3>
    <div class="card-info">
      <span class="info-active">${company}</span>
      <img src="img/dot.svg" alt="dot" />
      <span>${post}</span>
      <img src="./img/dot.svg" alt="dot" />
      <span>${year}</span>
    </div>
  </div>
  <button id="pop-btn">&times;</button>
</div>
<div class="pop-img">
  <img class="card-img" src="${image}" />
</div>
<div class="pop-content">
  <p class="card-descrip card-item-mg">
    ${details}
  </p>
  <div class="pop-footer">
    <ul class="card-tags card-item-mg">
      ${technologyList}
    </ul>
    <span class="span"></span>
    <div class="pop-actions">
      <button class="pop-button" onclick="window.open('${githubLink}', '_blank')">
        <span>See live</span>
        <img src="img/live-pop.svg" />
      </button>
      <button class="pop-button" onclick="window.open('${liveVersion}', '_blank')">
        <span>See source</span>
        <img src="img/github2.svg" />
      </button>
    </div>
  </div>
</div>`;
};

projects.forEach((aProject) => {
  const btnShowProject = document.getElementById(`card-${aProject.id}`);
  btnShowProject.addEventListener('click', () => {
    // alert(`clicked on ${aPoject.id}`);
    const thePopupCardShows = document.getElementById('popupCard');
    const htmlToInsert = ProjectPopup(
      aProject.id,
      aProject.title,
      aProject.company,
      aProject.post,
      aProject.year,
      aProject.image,
      aProject.technologies,
      aProject.details,
      aProject.githubLink,
      aProject.liveVersion,
    );
    thePopupCardShows.innerHTML = htmlToInsert;

    const overly = document.getElementById('overly');
    overly.classList.toggle('hidden');
    thePopupCardShows.classList.toggle('hidden-popup');

    const closePopBtn = document.getElementById('pop-btn');

    closePopBtn.addEventListener('click', () => {
      const thePopupCardShows = document.getElementById('popupCard');
      thePopupCardShows.innerHTML = '';
      overly.classList.toggle('hidden');
      thePopupCardShows.classList.toggle('hidden-popup');
    });
  });
});
// preserve data on browser

const uName = document.getElementById('name');
const uEmail = document.getElementById('email');
const text = document.getElementById('text');
const pForm = document.getElementById('form');

pForm.addEventListener('change', () => {
  const data = {
    username: uName.value,
    useremail: uEmail.value,
    message: text.value,
  };
  const userDataSerialized = JSON.stringify(data);
  localStorage.setItem('data', userDataSerialized);
});

window.addEventListener('load', () => {
  const userDataSerData = JSON.parse(localStorage.data);
  uName.value = userDataSerData.username;
  uEmail.value = userDataSerData.useremail;
  text.value = userDataSerData.message;
});