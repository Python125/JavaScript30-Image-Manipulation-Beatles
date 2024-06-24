// Spacing
const spacingSlider = document.getElementById("spacing");

function updateSpacing() {
  const spacingValue = document.getElementById("spacing").value + "px";
  document.documentElement.style.setProperty("--spacing", spacingValue);
}

spacingSlider.addEventListener("change", updateSpacing);
spacingSlider.addEventListener("mousemove", updateSpacing);

// Grayscale
const grayscaleSlider = document.getElementById("grayscale");

function updateGrayscale() {
  const grayscaleLevel = document.getElementById("grayscale").value + "%";
  document.documentElement.style.setProperty("--grayscale", grayscaleLevel);
}

grayscaleSlider.addEventListener("change", updateGrayscale);
grayscaleSlider.addEventListener("mousemove", updateGrayscale);

// Color Picker
const colorPicker = document.getElementById("base");

function updateBaseColor() {
  const newColor = document.getElementById("base").value;
  document.documentElement.style.setProperty("--base", newColor);
}

colorPicker.addEventListener("change", updateBaseColor);

// const inputs = document.querySelectorAll(".controls input");
// function handleUpdate() {
//   const suffix = this.dataset.sizing || "";
//   document.documentElement.style.setProperty(
//     `--${this.name}`,
//     this.value + suffix
//   );
// }
// inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));