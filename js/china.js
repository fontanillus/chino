const YEAR = document.getElementById("year");
const MES = document.getElementById("mes");
const SIGNO = document.getElementById("signo");
const IMGSIGNO = document.getElementById("imgSigno");

const simbolos = [
    "Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey",
    "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"
];

function calcular() {
    let yearNac = parseInt(YEAR.value);
    let mesNac = parseInt(MES.value);

    if (isNaN(yearNac) || yearNac < 1900 || yearNac > new Date().getFullYear()) {
        IMGSIGNO.src = "";
        return;
    }

    let indice = yearNac % 12;
    let signoChino = simbolos[indice];
   

    SIGNO.innerHTML = `Tu signo del zodíaco es <b>${signoChino}</b>`;
    imagenSigno = `./img/img${signoChino}.jpg`;
    IMGSIGNO.src = imagenSigno;
    IMGSIGNO.style.display = 'block';
    IMGSIGNO.style.margin = '0 auto';
    IMGSIGNO.style.width = '30%';
    IMGSIGNO.style.opacity = 0.3;

    console.log(signoChino);
}
