document.addEventListener('DOMContentLoaded', function() {
    // Replace [Their Name] with actual name
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || 'My Love';
    document.getElementById('partnerName').textContent = name;
    
    // Get elements
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');
    const question = document.getElementById('question');
    const bgMusic = document.getElementById('bgMusic');
    
    // Create floating hearts
    function createHearts() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.opacity = '0.7';
                heart.style.zIndex = '0';
                heart.style.pointerEvents = 'none';
                document.body.appendChild(heart);
                
                // Animate heart
                const animation = heart.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 0.7 },
                    { transform: `translateY(-100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 3000 + 2000,
                    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
                });
                
                animation.onfinish = () => heart.remove();
            }, i * 200);
        }
    }
    
    // Start background animations
    setInterval(createHearts, 3000);
    createHearts();
    
    // Yes button click
    yesBtn.addEventListener('click', function() {
        question.textContent = "You said YES! 💕";
        responseMessage.classList.remove('hidden');
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        
        // Play music (optional - ask for permission first)
        bgMusic.volume = 0.3;
        bgMusic.play().catch(e => console.log("Autoplay prevented:", e));
        
        // Confetti effect
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                createConfetti();
            }, i * 30);
        }
        
        // Special celebration
        const celebration = document.querySelector('.celebration');
        celebration.style.animation = 'bounce 0.5s infinite';
    });
    
    // No button behavior
    let noClicks = 0;
    noBtn.addEventListener('click', function() {
        noClicks++;
        const messages = [
            "Are you sure? 😢",
            "Think about all the fun we'll have! 💖",
            "Pretty please? 🥺",
            "You're breaking my heart 💔",
            "I'll keep asking forever! 😘"
        ];
        
        if (noClicks <= messages.length) {
            question.textContent = messages[noClicks - 1];
            yesBtn.style.transform = `scale(${1 + noClicks * 0.1})`;
            
            // Move button randomly
            const x = Math.random() * 100 - 50;
            const y = Math.random() * 100 - 50;
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
        }
        
        if (noClicks === messages.length) {
            noBtn.textContent = "OK, OK! I'll think about it! 😊";
            noBtn.style.transform = 'none';
            setTimeout(() => {
                question.textContent = "So... will you be my Valentine? 💘";
                noBtn.textContent = "Maybe later...";
                yesBtn.style.transform = 'scale(1)';
                noClicks = 0;
            }, 2000);
        }
    });
    
    // Create confetti
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['❤️', '💕', '💖', '💘', '💝'][Math.floor(Math.random() * 5)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 1000,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
    
    // Add click effect to yes button
    yesBtn.addEventListener('mousedown', () => {
        yesBtn.style.transform = 'scale(0.95)';
    });
    
    yesBtn.addEventListener('mouseup', () => {
        yesBtn.style.transform = 'scale(1)';
    });
    
    // Add romantic message of the day
    const romanticMessages = [
        "Love is when you look at someone and see everything you need.",
        "In your eyes, I found my home.",
        "Every love story is beautiful, but ours is my favorite.",
        "You're the missing piece I never knew I needed.",
        "My heart is and always will be yours."
    ];
    
    // Display random romantic message in console (secret message)
    console.log(`💝 ${romanticMessages[Math.floor(Math.random() * romanticMessages.length)]} 💝`);
});
