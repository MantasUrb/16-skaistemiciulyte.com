function heroImages(selector, data) {

    const DOM = document.querySelector(selector);
    let HTML = "";

    if (!DOM) {
        console.error('ERROR HERO IMAGES: content render place is not valid/incorrect');
        return false;
    }

    for (let i = 0; i < data.length; i++) {
    const info = data[i];
    HTML += `<div class="col-4 col-xl-6 col-sm-12 image">
                <a href="${info.link}"><img src="${info.path}" alt="${info.title}"/></a>
            </div>`;
            }
    DOM.innerHTML += HTML;
}

export { heroImages };