let images = document.querySelectorAll('.img-grid-item');
let imageDisplayControl = document.querySelector('.image-display-control');
let currentImage = document.querySelector('#current-image');
let imagesSources = [];
const previousImageButton = document.getElementById('previous');
const nextImageButton = document.getElementById('next');
const closeButton = document.getElementById('close');

images.forEach((image) => {

    imagesSources.push(image.getAttribute('src'));

    image.addEventListener('click', () => {

        imageDisplayControl.classList.toggle('hidden');
        currentImage.setAttribute('src', image.getAttribute('src'));

    });

});

previousImageButton.addEventListener('click', (event) => {
    let previousIndex = imagesSources.indexOf(currentImage.getAttribute('src'));

    if(previousIndex === 0) {
        event.preventDefault();
        return;
    }

    showPreviousImage(currentImage, imagesSources[previousIndex - 1]);
});

nextImageButton.addEventListener('click', (event) => {
    let nextIndex = imagesSources.indexOf(currentImage.getAttribute('src'));

    if(nextIndex === imagesSources.length - 1) {
        event.preventDefault();
        return;
    }

    showNextImage(currentImage, imagesSources[nextIndex + 1]);
});

closeButton.addEventListener('click', () => {
    imageDisplayControl.classList.add('hidden');
});

const showPreviousImage = (currentImage, previousImage) => {
    currentImage.setAttribute('src', previousImage);
}

const showNextImage = (currentImage, nextImage) => {
    currentImage.setAttribute('src', nextImage);
}