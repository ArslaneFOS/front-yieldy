const toggleChat = () => {
    var chat = document.getElementById('chat');

    chat.classList.toggle("invisible");
    document.body.classList.toggle("stop-scroll");

    /*if (chat.classList.contains('invisible')) {
        openChat();
    } else {
        closeChat();
    }*/
}

document.getElementById('toggle-chat').onclick = () => toggleChat();

document.getElementById('close-chat').onclick = () => toggleChat();