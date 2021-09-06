function heroImages(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = "";
    for (let i = 0; i < data.length; i++) {
      const info = data[i];
      HTML += `    <div class="col-4 col-xl-6 col-sm-12 image">
                    <img src="${info.path}" alt="${info.title}" />
                </div>`;
    }
    DOM.innerHTML += HTML;
}

export { heroImages };