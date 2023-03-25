"use strict";

const fallingCodeWrapper = document.getElementById("falling-code-wrapper");

class fallingCode
{
    constructor(element)
    {
        this.element = document.createElement(element);
        this.setTextOnElement("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

        var animation = anime({
            targets: this.element,
            translateY: '100vh',
            duration: (Math.random() * 10000) + 4000,
            delay: Math.random() * 1000,
            easing: 'linear',
            loop: true,
            autoplay: true   
        })
    }

    setTextOnElement(txt)
    {
        this.element.textContent = txt;
    }

    get Element()
    {
        return this.element;
    }
}

for(let i = 0; i < 60; i++)
{
    fallingCodeWrapper.appendChild(new fallingCode("div").element);
    
}

console.log(window.screen.height);