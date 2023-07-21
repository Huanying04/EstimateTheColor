let rand_color = 0;

var colorPicker = new iro.ColorPicker("#picker", {
    width: window.screen.width * 0.75,
    color: "#f00",
    layout: [
        { 
          component: iro.ui.Slider,
          options: {
            sliderType: 'hue'
          }
        },{ 
            component: iro.ui.Slider,
            options: {
              sliderType: 'saturation'
            }
          },{ 
            component: iro.ui.Slider,
            options: {
              sliderType: 'value'
            }
          }
      ]
});


colorPicker.on('color:change', function(color) {
    document.querySelector("#a-color").style.background = color.hexString;
});

function reset() {
    rand_color = getRandomColor();
    document.querySelector("#q-color").style.background = rand_color;
    document.querySelector("#check_text").innerHTML = ""
}

function check() {
    let q_color = new iro.Color(rand_color);
    q_color = q_color.hsv;
    let your_color = colorPicker.color.hsv;
    document.querySelector("#check_text").innerHTML = `目標顏色：<br>H: ${Math.round(q_color.h)} S: ${Math.round(q_color.s)} V: ${Math.round(q_color.v)}<br>你的顏色：<br>H: ${Math.round(your_color.h)} S: ${Math.round(your_color.s)} V: ${Math.round(your_color.v)}`
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onload = function() {
    rand_color = getRandomColor();
    document.querySelector("#q-color").style.background = rand_color;
    document.querySelector("#a-color").style.background = "#f00";
}