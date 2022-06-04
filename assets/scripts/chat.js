const openChat = () => {
    var chat = document.getElementById('chat');

    chat.classList.remove('invisible');
    document.body.classList.add('stop-scroll')
}

const closeChat = () => {
    var chat = document.getElementById('chat');

    chat.classList.add('invisible')
    document.body.classList.remove('stop-scroll')
}

const toggleChat = () => {
    var chat = document.getElementById('chat');

    if (chat.classList.contains('invisible')) {
        openChat();
    } else {
        closeChat();
    }
}

document.getElementById('toggle-chat').onclick = () => toggleChat();

document.getElementById('close').onclick = () => closeChat();