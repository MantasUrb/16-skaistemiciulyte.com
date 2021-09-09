function heroImages(selector, data) {
    
    const DOM = document.querySelector(selector);
    const host = "http://127.0.0.1:3000/";

    let HTML = "";
    if (window.location.href == host + 'index.html' 
        ||
        window.location.href == host) {
        for (let i = 0; i < data.length; i++) {
        const info = data[i];
        HTML += ` <div class="col-4 col-xl-6 col-sm-12 image">
                      <img src="${info.path}" alt="${info.title}" />
                  </div>`;
      }
      DOM.innerHTML += HTML;
    } else {
        return;
    }
}

export { heroImages };