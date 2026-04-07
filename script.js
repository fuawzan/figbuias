function openEnvelope() {
    document.querySelector('.envelope-wrapper').classList.toggle('open');
}

function createEmoji() {
    const emojis = ['❤️', '💖', '✨', '🌸', '💘', '🦋'];
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.getElementById('emoji-container').appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

setInterval(createEmoji, 300);
