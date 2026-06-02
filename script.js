const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();
    const copyright = document.createElement("p");
    copyright.className = "muted";
    copyright.textContent = `© ${year} David Zhihao Xu. All rights reserved.`;
    footer.appendChild(copyright);
}
