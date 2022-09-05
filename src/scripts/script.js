function changeMode() {
    document.getElementById('body').className = 'body-dark';
    document.getElementById('h1').className = 'text-dark';
    document.getElementById('p').className = 'text-dark';
    document.getElementById('login').classList.add('input-dark');
    document.getElementById('password').classList.add('input-dark');
    document.getElementById('remember').classList.add('text-dark');
    document.getElementById('darkmode-btn').classList.add('darkmode-btn');
    document.getElementById('forgot-password').classList.add('light-green');
    document.getElementById('footer-bg').src='imgs/bg-2.svg'
};