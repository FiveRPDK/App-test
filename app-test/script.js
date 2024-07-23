function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function updateBrightnessValue() {
    const brightness = document.getElementById('brightness').value;
    document.getElementById('brightness-value').innerText = `Lysstyrke: ${brightness}%`;
    document.querySelector('.app-container').style.filter = `brightness(${brightness}%)`;
}

function updateColorValue() {
    const color = document.getElementById('color').value;
    document.getElementById('color-value').innerText = `Lysfarve: ${color}`;
    document.querySelector('body').style.backgroundColor = color;
}

function updateTemperatureValue() {
    const temperature = document.getElementById('temperature').value;
    document.getElementById('temperature-value').innerText = `Temperatur: ${temperature}°C`;
    updateBackgroundColor(temperature);
}

function updateBackgroundColor(temperature) {
    // Define the range of temperatures
    const minTemp = 15;
    const maxTemp = 30;

    // Calculate the ratio between min and max temperatures
    const ratio = (temperature - minTemp) / (maxTemp - minTemp);

    // Interpolate between blue and red colors
    const red = Math.round(255 * ratio);
    const blue = Math.round(255 * (1 - ratio));

    // Set the background color based on the temperature
    document.body.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
}

function resetSettings() {
    // Reset brightness
    document.getElementById('brightness').value = 100;
    updateBrightnessValue();

    // Reset color
    document.getElementById('color').value = '#ffffff';
    updateColorValue();

    // Reset temperature
    document.getElementById('temperature').value = 22;
    updateTemperatureValue();

    // Reset background color
    document.body.style.backgroundColor = '#ffffff';
}