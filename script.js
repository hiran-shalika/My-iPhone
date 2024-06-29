document.addEventListener('DOMContentLoaded', () => {
    const app1Button = document.getElementById('bottomApp1');
    const app2Button = document.getElementById('bottomApp2');
    const app3Button = document.getElementById('bottomApp3');
    const app4Button = document.getElementById('bottomApp4');
    const iframe = document.getElementById('iframe');
    const buttonsLine1 = document.querySelector('.buttonsLine1');
    const bottomButtons = document.querySelector('.bottomButtons');

    function openApp(page) {
        iframe.src = page;
        buttonsLine1.style.display = 'none';
        bottomButtons.style.display = 'none';
    }

    app1Button.addEventListener('click', () => {
        openApp('bottomApp1.html');
    });

    app2Button.addEventListener('click', () => {
        openApp('bottomApp2.html');
    });

    app3Button.addEventListener('click', () => {
        openApp('bottomApp3.html');
    });

    app4Button.addEventListener('click', () => {
        openApp('bottomApp4.html');
    });

    const homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click', () => {
        iframe.src = ''; // Clear the iframe to simulate going back to the home screen
        buttonsLine1.style.display = 'flex';
        bottomButtons.style.display = 'flex';
    });
});
