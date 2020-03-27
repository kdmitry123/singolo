const NAV = document.querySelector('.nav');
NAV.onclick = navGoToHandler;

function navGoToHandler(event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        const selector = event.target.getAttribute('href');
        changeActiveNavLink(selector);
        if (selector === '#home') scrollTo({top: 0, behavior: 'smooth'});
        else document.querySelector(selector).scrollIntoView({behavior: 'smooth'})
    }
}

function changeActiveNavLink(selector) {
    NAV.querySelector('.active').classList.remove('active');
    NAV.querySelector(`[href="${selector}"]`).classList.add('active');
}

