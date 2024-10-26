const galaxyCount = 10;
for (let i = 1; i <= galaxyCount; i++) {
    const image = document.getElementById(`galaxyImage${i}`);
    const infoWindow = document.getElementById(`infoWindow${i}`);
    const overlay = document.getElementById(`overlay${i}`);
    const closeButton = infoWindow.querySelector('.galaxy-close');
    const infoText = document.getElementById(`infoText${i}`);
    const infoVideo = document.getElementById(`infoVideo${i}`);
    
    image.addEventListener('click', () => {
        infoWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
    
    closeButton.addEventListener('click', () => {
        infoWindow.classList.add('hidden');
        overlay.classList.add('hidden');
        infoVideo.pause();
        infoVideo.currentTime = 0;
    });
}

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}