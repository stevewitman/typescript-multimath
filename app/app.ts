function startGame() {
    // starting a new game

    let playerName: string = 'Audrey';
    logPlayer(playerName);

    let messagesElement: HTMLElement | null = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Stating new game.');
}

function logPlayer(name) {
    // use a template literal to log a message
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

