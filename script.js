const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });
}
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const status = document.querySelector('#form-status');
    status.textContent = 'Danke! Das Formular wurde im Prototyp geprüft, aber noch nicht versendet. Für den Livebetrieb muss ein echter Formularversand eingerichtet werden.';
  });
}
