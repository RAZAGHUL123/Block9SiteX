// Get the download progress element
const progress = document.getElementById('download-progress');

// Set the initial progress to 0%
let currentProgress = 0;

// Update the progress every second
const intervalId = setInterval(() => {
  currentProgress += 10;
  if (currentProgress > 100) {
    clearInterval(intervalId);
  }
  progress.style.width = currentProgress + '%';
}, 1000);
