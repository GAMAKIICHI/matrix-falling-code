"use strict";

const fallingCodeWrapper = document.getElementById("falling-code-wrapper");

class fallingCode
{
    constructor(element)
    {
        this.element = document.createElement(element);
        setTimeout(this.setTextOnElement(this.generateText()), 5);
        this.fallingAnimation();
        
        console.log(setTimeout(this.generateText(), 10));
        
    }

    setTextOnElement(txt)
    {
        this.element.textContent = txt;
    }

    fallingAnimation()
    {
        const speed = 20000;
        const delay = 1000;

        anime({
            targets: this.element,
            translateY: '200vh',
            duration: (Math.random() * speed) + 10000,
            easing: 'linear',
            loop: true,
            autoplay: true   
        })
    }

    generateText()
    {

        const textData = "健康は大切です。医療の進歩により、現代では多くの病気が治療可能になっています。しかし、自由にアクティブに生活するためには、日々の生活習慣にも気を配る必要があります。適度な運動とバランスのとれた食生活が、健康を保つために欠かせない要素です。MJRXQXASFD1795$2578&@";
        let textContent = "";

        for(let i = 0; i < (Math.random() * 20) + 15; i++)
        {
            let randNum = (Math.random() * textData.length) + 1;
            textContent += textData.charAt(randNum);
        }

        return textContent;
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