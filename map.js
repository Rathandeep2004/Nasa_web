// Search Functionality (Simulated data for greenhouse gas)
function searchPlace() {
  const place = document.getElementById("place-search").value;
  if (place) {
    document.getElementById("world-map").innerHTML = `<h3>Showing greenhouse gas data for ${place}...</h3>`;
    
    // Simulated greenhouse gas data
    const co2 = Math.floor(Math.random() * 100);
    const methane = Math.floor(Math.random() * 100);
    const nitrousOxide = Math.floor(Math.random() * 100);

    document.getElementById("world-map").innerHTML += `
      <p>CO₂ Concentration: ${co2}%</p>
      <p>Methane Concentration: ${methane}%</p>
      <p>Nitrous Oxide Concentration: ${nitrousOxide}%</p>
    `;

    // Activate AI Voice Feedback
    readGreenhouseGasData(place, co2, methane, nitrousOxide);
  }
}

// AI Voice Feedback
function readGreenhouseGasData(place, co2, methane, nitrousOxide) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = `In ${place}, the CO2 concentration is ${co2} percent, Methane is ${methane} percent, and Nitrous Oxide is ${nitrousOxide} percent.`;
  msg.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Male'));
  speechSynthesis.speak(msg);
}

// Clear history on page reload
window.onload = function() {
  document.getElementById('world-map').innerHTML = '';
};
