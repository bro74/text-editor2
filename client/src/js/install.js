const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {});
    event.preventDefault();
    const defferedPrompt = event; 
        //...
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (defferedPrompt) {
        defferedPrompt.prompt();
        const choiceResult = await deferredPrompt.userchoice;
        if (choiceResult.outcome == 'acceptted'){
            console.log('User accepted installation');
        }else {
            console.log('User dismissed installation');
        }
        defferedPrompt = null;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed succesfully');
});
