const main = document.querySelector(".main-window");
const helpBtn = document.getElementById("helpButton");

helpBtn.addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.classList.add("iframe-container");
    
    const iframe = document.createElement('iframe');
    iframe.src = "https://helpdesk.uffizio.com/knowledge";
    iframe.style.width= "600px"
    
    newDiv.appendChild(iframe);
    main.appendChild(newDiv);
});

