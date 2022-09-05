function isLightMode(){
    return !document.getElementById('body').classList.contains('body-dark');
}

function toggleMode() {
    if (isLightMode()) {
        document.getElementById('body').className = 'body-dark';
        document.getElementById('h1').className = 'text-dark';
        document.getElementById('p').className = 'text-dark';
        document.getElementById('login').classList.add('input-dark');
        document.getElementById('password').classList.add('input-dark');
        document.getElementById('remember').classList.add('text-dark');
        document.getElementById('darkmode-btn').classList.add('darkmode-btn');
        document.getElementById('forgot-password').classList.add('light-green');
        document.getElementById('icon-btn-mode').classList.remove('fa-moon');
        document.getElementById('icon-btn-mode').classList.add('fa-sun');        
        document.getElementById('footer-bg').src='imgs/bg-2.svg';
        return;
    }
    document.getElementById('body').className = '';
    document.getElementById('h1').className = '';
    document.getElementById('p').className = '';
    document.getElementById('login').classList.remove('input-dark');
    document.getElementById('password').classList.remove('input-dark');
    document.getElementById('remember').classList.remove('text-dark');
    document.getElementById('darkmode-btn').classList.remove('darkmode-btn');
    document.getElementById('forgot-password').classList.remove('light-green');
    document.getElementById('footer-bg').src='imgs/bg-1.svg';
    document.getElementById('icon-btn-mode').classList.remove('fa-sun');
    document.getElementById('icon-btn-mode').classList.add('fa-moon');

}