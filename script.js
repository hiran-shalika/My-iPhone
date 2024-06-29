document.addEventListener('DOMContentLoaded', () => {
    const app1Button = document.getElementById('app1');
    const app2Button = document.getElementById('app2');
    const app3Button = document.getElementById('app3');
    const app4Button = document.getElementById('app4');
    const iframe = document.getElementById('iframe');

    app1Button.addEventListener('click', () => {
        iframe.src = 'app1.html';
    });

    app2Button.addEventListener('click', () => {
        iframe.src = 'app2.html';
    });

    app3Button.addEventListener('click', () => {
        iframe.src = 'app3.html';
    });

    app4Button.addEventListener('click', () => {
        iframe.src = 'app4.html';
    });

    const homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click', () => {
        iframe.src = ''; // Clear the iframe to simulate going back to the home screen
    });
});
