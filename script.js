let texto = ''
let peso = ''
let altura = ''
let button = document.querySelector('button')

button.onclick = function () {
    altura = document.querySelector('#altura')
    peso = document.querySelector('#peso')
    texto = document.getElementById('texto')

    function calcIMC(altura, peso) {
        return Math.round(peso / (altura * altura))
    }

    function resultIMC() {

        if (altura.value === '' || peso.value === '') {
            return texto.innerHTML = `⚠️Todos os campos devem ser preenchidos⚠️`
        }
        return texto.innerHTML = `O resultado do seu IMC é de ${calcIMC(altura.value, peso.value)}`
    } resultIMC()
}