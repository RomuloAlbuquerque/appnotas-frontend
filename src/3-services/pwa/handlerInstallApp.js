let deferredPrompt; // Allows to show the install prompt
let setupButton;

export const handlerInstallApp = () => {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        console.log("beforeinstallprompt fired");
        if (setupButton == undefined) {
            setupButton = document.getElementById("setup_button");
        }
        setupButton.style.display = "inline"
        setupButton.disabled = false
    })
}

export const installApp = () => {
    deferredPrompt.prompt();
    setupButton.disabled = true;
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                alert("App instalado com sucesso no seu celular")
                console.log('PWA setup accepted');
                setupButton.style.display = 'none';
            } else {
                console.log('PWA setup rejected');
            }
            deferredPrompt = null;
        });
}