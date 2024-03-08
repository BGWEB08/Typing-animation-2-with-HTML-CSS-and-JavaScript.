const text = document.querySelector(".s-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "React";
    },0 )
    setTimeout(() => {
        text.textContent = "Express.js";
    },4000)
    setTimeout(() => {
        text.textContent = "Node.js";
    },8000)
    setTimeout(() => {
        text.textContent = "MongoDB";
    },12000)
}

textLoad();
setInterval(textLoad,16000)