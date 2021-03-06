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

const GALLERY = document.querySelector('.gallery');
const PORTFOLIO_BTNS = document.querySelectorAll('.filters__btn');

PORTFOLIO_BTNS.forEach(btn => btn.onclick = potfolioBtnHandler);

function potfolioBtnHandler(event) {
    if (event.target.classList.contains('button-on')) return
    document.querySelector('.filters__btn.button-on').classList.remove('button-on');
    event.target.classList.add('button-on');
    const pictures = [...document.querySelectorAll('.gallery>img')];
    const shuffled = pictures.slice();
    do { shuffled.sort(()=> 0.5 - Math.random()) }
    while (shuffled.some((picture, i)=> picture === pictures[i] ));
    shuffled.forEach(picture => GALLERY.append(picture));
}


const FORM = document.forms[0];
const MODAL = document.querySelector('.modal');
const SUBJ = MODAL.querySelector('.modal__subject');
const DESCRIPTION = MODAL.querySelector('.modal__description');
const OK = MODAL.querySelector('.modal__ok-btn');

FORM.onsubmit = submitHandler;

function submitHandler(event) {
    if (!FORM.checkValidity()) return
    MODAL.hidden = false;
    SUBJ.innerText = FORM.subj.value || 'Without subject';
    DESCRIPTION.innerText = FORM.details.value || 'Without description';
    event.preventDefault()
}

OK.onclick = MODAL.onclick = closeModalHandler;

function closeModalHandler(event) {
    if (event.target === OK || event.target === MODAL) MODAL.hidden = true;
    for (const field in FORM.elements) FORM.elements[field].value = '';
}

