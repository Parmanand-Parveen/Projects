// Set the launch date
const launchDate = new Date("December 31, 2024 00:00:00").getTime();

// Update the countdown every second
const interval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  // Calculate days, hours, minutes and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is over
  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Product Launched!";
  }
}, 1000);
