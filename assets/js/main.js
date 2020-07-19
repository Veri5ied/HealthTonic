window.addEventListener('scroll', moveScrollIndicator);
const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxScrollableHeight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e) {
    const percentage = ((window.scrollY) / maxScrollableHeight) * 100;
    scrollIndicatorElt.style.width = percentage + '%';
}

//Animation on scroll
AOS.init();

//Change view
let viewMode = getCookie("view-mode");
if (viewMode == "desktop"){
    viewport.setAttribute('content', 'width=1024');
}else if(viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no')
}