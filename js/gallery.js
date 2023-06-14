const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');

        if (i === index) {
            img.classList.add('active');
        }
    });
}

function switchImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(switchImage, 3000); // Change image every 3 seconds