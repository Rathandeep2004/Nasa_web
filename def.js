const images = [
    'placeholder1.jpg',
    'placeholder2.jpg',
    'placeholder3.jpg',
    'placeholder4.jpg'
  ];
  
  let currentIndex = 0;
  const imageElement = document.getElementById('currentImage');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  
  // Display the current image
  function displayImage(index) {
    imageElement.src = images[index];
  }
  
  // Event listener for the next button
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop around to the first image
    displayImage(currentIndex);
  });
  
  // Event listener for the previous button
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
    displayImage(currentIndex);
  });
  