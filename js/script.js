let isContactsShown = true;
let isProjectsShown = true;

const showContactsTitle = 'Show contacts';
const hideContactsTitle = 'Hide contacts';
const showProjectsTitle = 'Show projects';
const hideProjectsTitle = 'Hide projects';
const title = 'Click here to see more info';

const refs = {
  showContactsTitle: document.querySelector('#js-show-contacts'),
  contactsContainer: document.querySelector('#js-contacts-container'),
  showProjectsTitle: document.querySelector('#js-show-projects'),
  projectsContainer: document.querySelector('#js-projects-container'),
};

refs.contactsContainer.setAttribute('hidden', isContactsShown);
refs.projectsContainer.setAttribute('hidden', isProjectsShown);

refs.showContactsTitle.setAttribute('title', title);
refs.showProjectsTitle.setAttribute('title', title);

refs.showProjectsTitle.textContent = showProjectsTitle;
refs.showContactsTitle.textContent = showContactsTitle;

refs.showContactsTitle.addEventListener('click', showContacts);
refs.showProjectsTitle.addEventListener('click', showProjects);

function showProjects() {
  if (isProjectsShown) {
    refs.showProjectsTitle.textContent = hideProjectsTitle;

    refs.projectsContainer.removeAttribute('hidden');
    refs.showProjectsTitle.removeAttribute('title');
    isProjectsShown = false;
    return;
  } else {
    refs.showProjectsTitle.textContent = showProjectsTitle;
    refs.projectsContainer.setAttribute('hidden', isProjectsShown);
    refs.showProjectsTitle.setAttribute('title', title);
    isProjectsShown = true;
    return;
  }
}

function showContacts() {
  if (isContactsShown) {
    refs.showContactsTitle.textContent = hideContactsTitle;

    refs.contactsContainer.removeAttribute('hidden');
    refs.showContactsTitle.removeAttribute('title');
    isContactsShown = false;
    return;
  } else {
    refs.showContactsTitle.textContent = showContactsTitle;
    refs.contactsContainer.setAttribute('hidden', isContactsShown);
    refs.showContactsTitle.setAttribute('title', title);
    isContactsShown = true;
    return;
  }
}
