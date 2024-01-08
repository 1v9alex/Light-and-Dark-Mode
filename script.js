document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme');
    themeSwitch.addEventListener('change', function(event) {
        if (event.target.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
