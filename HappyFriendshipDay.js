// document.addEventListener('DOMContentLoaded', function() {
//     const submitBtn = document.getElementById('submitBtn');
    
//     submitBtn.addEventListener('click', function() {
//         const userName = document.getElementById('userName').value;
//         const friendName = document.getElementById('friendName').value;
//         const relationship = document.getElementById('relationship').value;
        
//         if (userName && friendName && relationship) {
//             const url = `FinalFriend.html?friendName=${encodeURIComponent(friendName)}&relationship=${encodeURIComponent(relationship)}`;
//             window.open(url, '_blank');
//         } else {
//             alert('Please fill in all fields before submitting.');
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const submitBtn = document.getElementById('submitBtn');
//     const clickAnimation = document.getElementById('clickAnimation');
//     const clickSound = document.getElementById('clickSound');
//     let animation;
    
//     // Load the Lottie animation
//     animation = lottie.loadAnimation({
//         container: document.getElementById('lottieContainer'),
//         renderer: 'svg',
//         loop: true,
//         autoplay: false,
//         path: 'ClickButtonAnimation.json' // Make sure this path is correct
//     });

//     function showLoadingAnimation() {
//         const testYourKnowledge = document.querySelector('.container');
//         const loadingContainer = document.createElement('div');
//         loadingContainer.style.position = 'absolute';
//         loadingContainer.style.top = '50%';
//         loadingContainer.style.left = '50%';
//         loadingContainer.style.transform = 'translate(-50%, -50%)';
//         loadingContainer.style.zIndex = '9999';
//         loadingContainer.style.width = '100px';
//         loadingContainer.style.height = '100px';
    
//         testYourKnowledge.appendChild(loadingContainer);
    
//         lottie.loadAnimation({
//           container: loadingContainer,
//           renderer: 'svg',
//           loop: true,
//           autoplay: true,
//           path: 'Challenge5\ClickButtonAnimation.json'
//         });
    
//         setTimeout(() => {
//           testYourKnowledge.removeChild(loadingContainer);
//         }, 3000);
//       }

//     submitBtn.addEventListener('click', function() {
//         const userName = document.getElementById('userName').value;
//         const friendName = document.getElementById('friendName').value;
//         const relationship = document.getElementById('relationship').value;
        
//         if (userName && friendName && relationship) {
//             // Play click sound
//             clickSound.play();

//             // Show animation
//             clickAnimation.style.display = 'flex';
//             animation.play();

//             // Hide animation and proceed after 3 seconds
//             setTimeout(() => {
//                 clickAnimation.style.display = 'none';
//                 animation.stop();
//                 const url = `FinalFriend.html?friendName=${encodeURIComponent(friendName)}&relationship=${encodeURIComponent(relationship)}`;
//                 window.open(url, '_blank');
//             }, 3000);
//         } else {
//             alert('Please fill in all fields before submitting.');
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const clickSound = document.getElementById('clickSound');

    submitBtn.addEventListener('click', function() {
        const userName = document.getElementById('userName').value;
        const friendName = document.getElementById('friendName').value;
        const relationship = document.getElementById('relationship').value;
        
        if (userName && friendName && relationship) {
            // Play click sound
            clickSound.play();

            // Proceed immediately to the new page
            const url = `FinalFriend.html?friendName=${encodeURIComponent(friendName)}&relationship=${encodeURIComponent(relationship)}`;
            window.open(url, '_blank');
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
});