

// document.addEventListener('DOMContentLoaded', function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const friendName = urlParams.get('friendName');
//     const relationship = urlParams.get('relationship');

//     const friendNameArea = document.getElementById('friendNameArea');
//     const explanationArea = document.getElementById('explanationArea');
//     const backgroundMusic = document.getElementById('backgroundMusic');
//     const toggleMusicBtn = document.getElementById('toggleMusic');
//     const clickSound = document.getElementById('clickSound');

//     friendNameArea.textContent = `Dear ${friendName},`;

//     // Load Lottie animation
//     const animation = lottie.loadAnimation({
//         container: document.getElementById('animationContainer'),
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: 'Animationtop.json'
//     });

//     // Load the appropriate explanation and music based on the relationship
//     fetch(`${relationship}.html`)
//         .then(response => response.text())
//         .then(html => {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, 'text/html');
//             explanationArea.innerHTML = doc.body.innerHTML;

//             // Set music source
//             const musicPath = doc.querySelector('meta[name="musicPath"]').getAttribute('content');
//             backgroundMusic.src = musicPath;

//             // Play music automatically
//             backgroundMusic.play().catch(error => {
//                 console.log("Autoplay was prevented. Please use the play button.");
//             });
//         })
//         .catch(error => {
//             console.error('Error loading explanation:', error);
//             explanationArea.textContent = 'Error loading friendship message. Please try again.';
//         });

//     // Toggle music play/pause
//     toggleMusicBtn.addEventListener('click', function() {
//         clickSound.play();  // Play click sound
//         if (backgroundMusic.paused) {
//             backgroundMusic.play();
//             toggleMusicBtn.textContent = 'Pause Music';
//         } else {
//             backgroundMusic.pause();
//             toggleMusicBtn.textContent = 'Play Music';
//         }
//     });

//     // Update button text when music starts playing
//     backgroundMusic.addEventListener('play', function() {
//         toggleMusicBtn.textContent = 'Pause Music';
//     });

//     // Update button text if music fails to autoplay
//     backgroundMusic.addEventListener('error', function() {
//         toggleMusicBtn.textContent = 'Play Music';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const friendName = urlParams.get('friendName');
    const relationship = urlParams.get('relationship');

    const friendNameArea = document.getElementById('friendNameArea');
    const explanationArea = document.getElementById('explanationArea');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const toggleMusicBtn = document.getElementById('toggleMusic');
    const clickSound = document.getElementById('clickSound');

    friendNameArea.textContent = `Dear ${friendName},`;

    // Load top Lottie animation
    const topAnimation = lottie.loadAnimation({
        container: document.getElementById('animationContainer'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Animationtop.json'
    });

    // Load click button animation
    const clickButtonAnimation = lottie.loadAnimation({
        container: document.getElementById('clickButtonAnimationContainer'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'ClickButtonAnimation.json'
    });

    // Load the appropriate explanation and music based on the relationship
    fetch(`${relationship}.html`)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            explanationArea.innerHTML = doc.body.innerHTML;

            // Set music source
            const musicPath = doc.querySelector('meta[name="musicPath"]').getAttribute('content');
            backgroundMusic.src = musicPath;

            // Play music automatically
            backgroundMusic.play().catch(error => {
                console.log("Autoplay was prevented. Please use the play button.");
            });
        })
        .catch(error => {
            console.error('Error loading explanation:', error);
            explanationArea.textContent = 'Error loading friendship message. Please try again.';
        });

    // Toggle music play/pause
    toggleMusicBtn.addEventListener('click', function() {
        clickSound.play();  // Play click sound
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            toggleMusicBtn.textContent = 'Pause Music';
        } else {
            backgroundMusic.pause();
            toggleMusicBtn.textContent = 'Play Music';
        }
    });

    // Update button text when music starts playing
    backgroundMusic.addEventListener('play', function() {
        toggleMusicBtn.textContent = 'Pause Music';
    });

    // Update button text if music fails to autoplay
    backgroundMusic.addEventListener('error', function() {
        toggleMusicBtn.textContent = 'Play Music';
    });
});

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this Friendship Day message!");
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
}

function shareOnTelegram() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this Friendship Day message!");
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}