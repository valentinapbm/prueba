let ganadores = ["Anna", "Beth", "Cara"];
// "Oro ganador: Anna, Plata ganadora: Beth, Bronce ganador: Cara"

function podium (arr) {
    let i = 0;
    let str = '';
    let podio = ['Oro ganador: ', ', Plata ganadora: ', ', Bronce ganador: '];
    arr.forEach(function (item) {
        str = str + podio[i] + item;
        i++;
    });
    return str;
}

console.log(podium(ganadores));