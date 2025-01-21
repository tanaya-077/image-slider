// Select the elements
const images = document.querySelectorAll('.images img');
const buttons = document.querySelectorAll('.btn-slider span');
let currentIndex = 0;

// Function to update the image display
function updateSlider(index) {
    // Hide all images
    images.forEach(img => img.style.display = 'none');
    // Show the image at the current index
    images[index].style.display = 'block';

    // Update button styling
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.style.backgroundColor = 'white';
        } else {
            btn.style.backgroundColor = '';
        }
    });
}

// Function to move to the next image
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    updateSlider(currentIndex);
}

// Function to move to the previous image
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
    updateSlider(currentIndex);
}

// Event listeners for buttons
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index; // Set the current index to the button clicked
        updateSlider(currentIndex);
    });
});

// Initialize the slider by displaying the first image
updateSlider(currentIndex);

// Auto slide functionality (optional)
setInterval(nextSlide, 3000); // Change image every 3 seconds
