// Force the chat to open programmatically after a short delay
setTimeout(() => {
    const toggleButton = document.querySelector('.chat-window-toggle');
    if (toggleButton) toggleButton.click();
}, 7000);