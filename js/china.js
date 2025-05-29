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

    if (
        isNaN(yearNac) ||
        yearNac < 1900 ||
        yearNac > new Date().getFullYear() ||
        isNaN(mesNac) ||
        mesNac < 1 ||
        mesNac > 12
    ) {
        SIGNO.innerHTML = "";
        IMGSIGNO.src = "";
        return;
    }

    // Si nació en enero, restamos un año (por el calendario chino)
    if (mesNac == 1) {
        yearNac = yearNac - 1;
    }

    // Cálculo del signo chino
    const signoIndex = (yearNac - 1900) % 12;
    const signoChino = simbolos[signoIndex];

    // Mostrar resultado
    SIGNO.innerHTML = `Tu signo del zodíaco es <b>${signoChino}</b>`;
    const imagenSigno = `./img/img${signoChino}.jpg`;
    IMGSIGNO.src = imagenSigno;
    IMGSIGNO.style.display = 'block';
    IMGSIGNO.style.margin = '0 auto';
    IMGSIGNO.style.width = '30%';
    IMGSIGNO.style.opacity = 0.3;

    console.log(signoChino);
}
