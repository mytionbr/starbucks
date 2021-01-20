function imgSlider(anything){
    document.querySelector('.starbucks').src = `./images/${anything}.png`
}
function changeCircleColor(color){
    const circle = document.querySelector(".circle")
    circle.style.background = color
}