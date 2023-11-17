function calculatePageLoadTime() {
    const perfData = window.performance.timing;
    return perfData.domComplete - perfData.domLoading;
}

function showLoadTime() {
    const pageLoadTime = calculatePageLoadTime();
    let footer = document.querySelector("footer");
    let pageLoadTimeElement = document.createElement("p");
    pageLoadTimeElement.innerHTML = `Page load time: ${pageLoadTime}ms`;
    footer.appendChild(pageLoadTimeElement);
}

window.addEventListener("load", showLoadTime);