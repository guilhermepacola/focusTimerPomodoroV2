let darkMode = true;

const buttonToggle = document.getElementById('toggle-light-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'light' : 'Dark';
    event.currentTarget.queryselector('span').textContent = `${mode} mode Ativado`;
    darkMode = !darkMode
})
