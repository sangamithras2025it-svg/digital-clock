function updateClock() {

    // Get current date and time
    let now = new Date();

    // Get hours, minutes and seconds
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    // Combine time
    let time = hours + ":" + minutes + ":" + seconds;

    // Display time in HTML
    document.getElementById("clock").innerHTML = time;

    // Display date in HTML
    document.getElementById("date").innerHTML =
        now.toDateString();

}

// Update clock every 1 second
setInterval(updateClock, 1000);

// Call function immediately
updateClock();