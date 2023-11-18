(function () {
    window.addEventListener("load", () => {
        let pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        let footer = document.querySelector("footer");
        let footerText = document.createElement("p");
        footerText.innerHTML = `Page load time: ${pageLoadTime}ms`;
        footer.appendChild(footerText);
    });
})();

