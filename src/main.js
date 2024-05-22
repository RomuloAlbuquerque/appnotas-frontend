//import './assets/main.css'
import '../public/registerServiceWorker';
import { createApp } from 'vue'
import App from './App.vue'
import router from './4-routes'
import './index.css'

createApp(App).use(router).mount('#app')





let deferredPrompt; // Allows to show the install prompt
let setupButton;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log("beforeinstallprompt fired");
    if (setupButton == undefined) {
        setupButton = document.getElementById("setup_button");
    }
    // Show the setup button
    setupButton.style.display = "inline";
    setupButton.disabled = false;
});


export function installApp() {
    // Show the prompt
    deferredPrompt.prompt();
    setupButton.disabled = true;
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA setup accepted');
                // hide our user interface that shows our A2HS button
                setupButton.style.display = 'none';
            } else {
                console.log('PWA setup rejected');
            }
            deferredPrompt = null;
        });
}
