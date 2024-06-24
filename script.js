const spacingSlider = document.getElementById("spacing");
const grayscaleSlider = document.getElementById("grayscale");

function updateSpacing() {
  const spacingValue = document.getElementById("spacing").value + "px";
  document.documentElement.style.setProperty("--spacing", spacingValue);
}

function updateGrayscale() {
  const grayscaleLevel = document.getElementById("grayscale").value + "%";
  document.documentElement.style.setProperty("--grayscale", grayscaleLevel);
}

spacingSlider.addEventListener("change", updateSpacing);
spacingSlider.addEventListener("mousemove", updateSpacing);

grayscaleSlider.addEventListener("change", updateGrayscale);
grayscaleSlider.addEventListener("mousemove", updateGrayscale);