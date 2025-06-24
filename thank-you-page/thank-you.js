let countdown = 10;
function updateButton() {
    const button = document.querySelector('.home-button');
    button.textContent = `Redirecting you in ${countdown} seconds...`;
    countdown--;
    if (countdown < 0) {
        button.textContent = 'Redirecting...';
        if (window.history.length > 1) {
            window.history.back();
            setTimeout(function() {
                if (window.history.length <= 1) {
                    window.location.href = 'https://saurabhpatil.netlify.app/noresponse';
                }
            }, 1000);
        } else {
            window.location.href = 'https://saurabhpatil.netlify.app/noresponse';
        }
    }
}

window.onload = function() {
    setInterval(updateButton, 1000);
}
