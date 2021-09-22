function heroImages(selector, data) {

    const DOM = document.querySelector(selector)
    const host = "https://mantasurb.github.io/16-skaistemiciulyte.com/";

    let HTML = "";
    if (window.location.href == host
        ||
        window.location.href == host + 'index.html' 
        ||
        window.location.href == host + 'vilnius-university-siauliai-academy.html') {
        for (let i = 0; i < data.length; i++) {
        const info = data[i];
        HTML += `<div class="col-4 col-xl-6 col-sm-12 image">
                    <a href="${info.link + '.html'}"><img src="${info.path}" alt="${info.title}"/></a>
                </div>`;
        }
        DOM.innerHTML += HTML;
    } else {
        return;
    }
}

export { heroImages };
