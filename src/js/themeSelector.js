const changeThemeClick = (button) => {
    const theme = button.getAttribute('data-theme');
    const calculator = document.querySelector('.calculator');

    calculator.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.add(theme);
}

const init = () => {
    document.querySelectorAll('.btn.color-theme').forEach(button => {
        button.addEventListener('click', () => changeThemeClick(button));
    })
}

export default { init };
