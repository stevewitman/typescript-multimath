"use strict";
function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Stating new game.');
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map