const swatchData = [
  {
    hex: "#fde2e4",
    rgb: "rgb(253, 226, 228)",
  },
  {
    hex: "#e2ece9",
    rgb: "rgb(226, 236, 233)",
  },
  {
    hex: "#bee1e6",
    rgb: "rgb(190, 225, 230)",
  },
  {
    hex: "#cddafd",
    rgb: "rgb(205, 218, 253)",
  },
];
const swatchContainer = document.getElementById('swatch-container');

(function(){
  for(swatch of swatchData){
    let tempCard = document.createElement('div');
    let colorSwatch = document.createElement('div');
    let colorData =  document.createElement('div');
    tempCard.classList.add('card');
    colorSwatch.classList.add('swatch');
    colorData.classList.add('data');
    colorSwatch.style.backgroundColor = swatch.rgb;
    colorData.innerText = `${swatch.hex}
    ${swatch.rgb}`;
    tempCard.appendChild(colorSwatch);
    tempCard.appendChild(colorData);
    swatchContainer.appendChild(tempCard);
  }
}())