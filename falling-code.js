"use strict";

const fallingCodeWrapper = document.getElementById("falling-code-wrapper");

class fallingCode
{
    constructor(element)
    {
        this.element = document.createElement(element);
        this.setTextOnElement(this.generateText(false));
        this.fallingAnimation();
    }

    setTextOnElement(txt)
    {
        this.element.textContent = txt;
    }

    fallingAnimation()
    {
        anime({
            targets: this.element,
            translateY: '220vh',
            delay: randomValues(1000, 5000),
            duration: 5000,
            easing: 'linear',
            loop: true,
            autoplay: true   
        })

        function randomValues(low, high)
        {
            return anime.random(low, high)
        }
        
    }

    generateText(lever)
    {

        const textData = "健康は大切です。医療の進歩により、現代では多くの病気が治療可能になっています。しかし、自由にアクティブに生活するためには、日々の生活習慣にも気を配る必要があります。適度な運動とバランスのとれた食生活が、健康を保つために欠かせない要素です。MJRXQXASFD1795$2578&@";
        let textContent = "";

        const isLever = lever === true ? 15 : ((Math.random() * 25) + 20);

        for(let i = 0; i < 25; i++)
        {
            let randNum = (Math.random() * textData.length) + 1;
            textContent += textData.charAt(randNum);
        }

        return textContent;
    }

    shuffleText()
    {   
        const shuffle = () =>
        {   
            this.element.textContent = this.generateText(true);
        }
        setInterval(shuffle, 100);
    }
}

let textString = [];

for(let i = 0; i < 80; i++)
{
    let fcElement = new fallingCode("div");
    fallingCodeWrapper.appendChild(fcElement.element);
    textString.push(fcElement);
}

function shuffleColumns()
{
    for(let i = 0; i < textString.length; i++)
    {
        textString[i].shuffleText();
    }
}

shuffleColumns();
