// Alterações dos Textos

var capturando = "";
var capturando2 = "";
var capturando3 = "";
var capturando4 = "";

function capturar() {
    capturando = document.getElementById('elderName').value;
    document.getElementById("nameDigited").innerHTML = capturando
    capturando2 = document.getElementById('missionName').value;
    document.getElementById("missionDigited").innerHTML = capturando2
    capturando3 = document.getElementById('yearMission').value;
    document.getElementById("yearDigited").innerHTML = capturando3
    capturando4 = document.getElementById('emailMission').value;
    document.getElementById("emailDigited").innerHTML = capturando4
}

// Seletor de Fotos

const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function () {
    
    const img = new Image()
    img.src = reader.result
    document.getElementById('photo').src = img.src

    }
    reader.readAsDataURL(input.files[0])
}, false )

// Seletor de Bandeira

function getSelectValue () {
    var selectValue = document.getElementById('flagsSelection').value;
    console.log(selectValue);

    if (selectValue === 'canadaF') {
        document.getElementById('flagSelected').src="images/canada.jpg"
        }
    else if (selectValue === 'brazilF') {
        document.getElementById('flagSelected').src="images/brazil.png"   
    }
    else if (selectValue === 'mexicoF') {
        document.getElementById('flagSelected').src="images/mexico.png"
    }
    else if (selectValue === 'euaF') {
        document.getElementById('flagSelected').src="images/eua.png"
    }
    else if (selectValue === 'portugalF') {
        document.getElementById('flagSelected').src="images/portugal.png"
    }
    else if(selectValue === 'argentinaF'){
        document.getElementById('flagSelected').src="images/argentina.png"
    }
    
}
getSelectValue();