let styles = `
.bitches {
    width: 10px;
    height: 10px;
    background-color: transparent;
    position: fixed;
    font-family: sans-serif;
    color: white;
    mix-blend-mode: difference;
}

@keyframes bitches-effect {
    from {
        transform: translateY(-40px) translateX(-40px);
    }

    to {
        transform: translateY(-100px) translateX(-40px) scale(2);
        opacity: 0.01;
    }
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "+0&nbsp;bitches";

    paragraph.className = "bitches";
    document.body.appendChild(paragraph);

    paragraph.style.left = `${e.clientX}px`;
    paragraph.style.top = `${e.clientY}px`;

    paragraph.style.animation = "bitches-effect .4s  linear";
    paragraph.onanimationend = () => document.body.removeChild(paragraph);
}
