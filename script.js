let unidades = {
    1 : 'um',
    2 : 'dois',
    3 : 'três',
    4 : 'quatro',
    5 : 'cinco',
    6 : 'seis',
    7 : 'sete',
    8 : 'oito', 
    9 : 'nove',
    10 : 'dez',
    11 : 'onze',
    12 : 'doze',
    13 : 'treze',
    14 : 'quatorze',
    15 : 'quinze',
    16 : 'dezesseis',
    17 : 'dezessete',
    18 : 'dezoito',
    19 : 'dezenove',
} 

let dezenas = {
    2 : 'vinte',
    3 : 'trinta',
    4 : 'quarenta',
    5 : 'cinquenta',
    6 : 'sessenta',
    7 : 'setenta',
    8 : 'oitenta',
    9 : 'noventa',
}

let centenas = {
    1 : 'cento',
    2 : 'duzentos',
    3 : 'trezentos',
    4 : 'quatrocentos',
    5 : 'quinhentos',
    6 : 'seiscentos',
    7 : 'setecentos',
    8 : 'oitocentos',
    9 : 'novecentos'

}
let container = document.getElementsByClassName('numberContent')[0]

const startbutton = document.getElementById('startbutton')

startbutton.addEventListener('click',function(){

    startbutton.classList.add('hidden')
    container.classList.remove('hidden')

    numbersToWords()
}
)

function numbersToWords(){
    let output = []

    for(let i = 1; i <= 1000; i++){
        output.push(writeNumbers(i))
    }
    
    container.innerText = output.join(', ')
}

function writeNumbers(number){
    if (number <= 19){
        return unidades[number].charAt(0).toUpperCase() + unidades[number].slice(1);
    }

    if (number === 100) return 'Cem'
    if (number === 1000) return 'Mil'

    let centena = Math.trunc(number / 100);
    let dezena = Math.trunc ((number % 100)/10);
    let unidade =  number % 10;

    if (number % 100 === 0) return centenas[centena].charAt(0).toUpperCase() +  centenas[centena].slice(1)

    if (unidade === 0 && number < 100) return dezenas[dezena].charAt(0).toUpperCase() + dezenas[dezena].slice(1)

    if (number % 100 < 20) return centenas[centena].charAt(0).toUpperCase() +  centenas[centena].slice(1) + ` e ${unidades[number % 100]}`

    if (number < 100)  return dezenas[dezena].charAt(0).toUpperCase() + dezenas[dezena].slice(1) + ` e ${unidades[unidade]}`;

    if (dezena === 0 ) return centenas[centena].charAt(0).toUpperCase() +  centenas[centena].slice(1) + ` e ${unidades[unidade]}`

    if (unidade === 0) return centenas[centena].charAt(0).toUpperCase() +  centenas[centena].slice(1) + ` e ${dezenas[dezena]}`

    return centenas[centena].charAt(0).toUpperCase() +  centenas[centena].slice(1) + ` e ${dezenas[dezena]} e ${unidades[unidade]}`;
}
console.log(writeNumbers(93))