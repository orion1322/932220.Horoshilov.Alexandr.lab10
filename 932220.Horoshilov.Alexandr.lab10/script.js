document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        backstage: document.getElementById('backstage'),
        lamp: document.getElementById('lamp'),
        light: document.getElementById('light'),
        switchElement: document.getElementById('switch'),
        rabbit: document.getElementById('rabbit'),
        bird: document.getElementById('bird'),
        witch: document.getElementById('witch'),
        hat: document.getElementById('hat')
    };

    let lightOn = false;

    elements.backstage.addEventListener('click', () => {
        elements.backstage.style.transform = 'translateY(-100%)';
        setTimeout(() => elements.backstage.style.display = 'none', 1000);
    });

    elements.switchElement.addEventListener('mousedown', () => {
        elements.switchElement.style.transform = 'translate(-42%, 10px)';
    });

    elements.switchElement.addEventListener('mouseup', () => {
        elements.switchElement.style.transform = 'translate(-42%, 0)';
        lightOn = !lightOn;
        elements.light.style.opacity = lightOn ? 1 : 0;
        elements.witch.style.opacity = lightOn ? 1 : 0;
        elements.hat.style.opacity = lightOn ? 1 : 0;
        elements.rabbit.style.opacity = lightOn ? 1 : 0;
        elements.bird.style.opacity = lightOn ? 1 : 0;
    });

    elements.rabbit.addEventListener('click', () => {
        elements.rabbit.style.transform = 'translate(30%, 140%)';
        setTimeout(() => elements.bird.style.transform = 'translate(30%, 0)', 500);
    });

    elements.bird.addEventListener('click', () => {
        elements.bird.style.transform = 'translate(30%, 140%)';
        setTimeout(() => elements.rabbit.style.transform = 'translate(30%, 0)', 500);
    });
});