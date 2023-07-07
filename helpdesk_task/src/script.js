const main = document.querySelector(".main-window");
const helpBtn = document.getElementById("helpButton");
let iframeVisible = false; 
let iframeContainer = null;

helpBtn.addEventListener('click', function() {
    if (iframeVisible) {
        hideIframe();
    } else {
        showIframe();
    }
});

function showIframe() {
    if (!iframeContainer) {
        createIframe();
    }
    iframeContainer.style.display = "block";
    iframeVisible = true;
}

function hideIframe() {
    if (iframeContainer) {
        iframeContainer.style.display = "none";
    }
    iframeVisible = false;
}

function createIframe() {
    iframeContainer = document.createElement('div');
    iframeContainer.classList.add("iframe-container");

    const iframe = document.createElement('iframe');
    iframe.src = "https://helpdesk.uffizio.com/knowledge/trakzee-platform";

    const closeButton = document.createElement('button');
    closeButton.innerText = "Close";
    closeButton.classList.add("close-btn")
    
    closeButton.addEventListener('click', hideIframe);

    const contentContainer = document.createElement('div');
    contentContainer.appendChild(closeButton);
    contentContainer.appendChild(iframe);
    contentContainer.classList.add("container-iframe"); 


    iframeContainer.appendChild(contentContainer);
    main.appendChild(iframeContainer);
}





