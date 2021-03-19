/* 
let num = 5;

function sumar(num) {
    num + 5;
    return num;
}

console.log(sumar(10)); // que numero imprime ????? 
*/


let jugador = prompt('Ingrese su sexo:\n "H" para Hombre\n "M" para Mujer');
if(jugador === "h" || jugador === "H") document.getElementById("humano").style.background = "url('img/hombre.png')";
else if(jugador === "m" || jugador === "M") document.getElementById("humano").style.background = "url('img/mujer.png')";
else document.getElementById("humano").style.background = "url('img/noSabemos.png')";

const casillas_vasias = [];
const win_X = [];
const win_0 = [];
let paso = 1; // para no poder hacer varios click
let puntos_humano = 0;
let puntos_ia = 0;

const newBoard = () => {
    if(win_X.length !== 0) limpiar();
    document.getElementById("fin").innerHTML = "Tic Tac Toe";
    casillas_vasias.push(0, 1, 2, 3, 4, 5, 6, 7, 8);
    let out = "";
    for (let i = 0; i < 9; i++) out += `<div id=${i}_caja class='caja'></div>`;
    document.getElementById("campo").innerHTML = out;
    for (let i = 0; i < 9; i++) document.getElementById(`${i}_caja`).addEventListener('click', function () {
        getClick(this); // mandamos la casilla donde hace click
    });
}

const getClick = (carta) => {
    let carta_id = parseInt(carta.id);
    switch (true) {
        case (carta_id === 0 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
        case (carta_id === 1 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
        case (carta_id === 2 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
        case (carta_id === 3 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
        case (carta_id === 4 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
        case (carta_id === 5 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
        case (carta_id === 6 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
        case (carta_id === 7 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
        case (carta_id === 8 && casillas_vasias.includes(carta_id) && paso === 1):
            dibujar_X(carta, carta_id);
            break;
    }
}

const ganador = () => {
    switch (true) {
// **************************************************** los X *********************
        case (win_X.includes(0) && win_X.includes(1) && win_X.includes(2)):
            dibujar_ganador(0, 1, 2, 8, "X");
            break;
        case (win_X.includes(3) && win_X.includes(4) && win_X.includes(5)):
            dibujar_ganador(3, 4, 5, 8, "X");
            break;
        case (win_X.includes(6) && win_X.includes(7) && win_X.includes(8)):
            dibujar_ganador(6, 7, 8, 8, "X");
            break;
        case (win_X.includes(0) && win_X.includes(3) && win_X.includes(6)):
            dibujar_ganador(0, 3, 6, 6, "X");
            break;
        case (win_X.includes(1) && win_X.includes(4) && win_X.includes(7)):
            dibujar_ganador(1, 4, 7, 6, "X");
            break;
        case (win_X.includes(2) && win_X.includes(5) && win_X.includes(8)):
            dibujar_ganador(2, 5, 8, 6, "X");
            break;
        case (win_X.includes(0) && win_X.includes(4) && win_X.includes(8)):
            dibujar_ganador(0, 4, 8, 5, "X");
            break;
        case (win_X.includes(2) && win_X.includes(4) && win_X.includes(6)):
            dibujar_ganador(2, 4, 6, 7, "X");
            break;
// **************************************************** los 0 *********************
        case (win_0.includes(0) && win_0.includes(1) && win_0.includes(2)):
            dibujar_ganador(0, 1, 2, 4, 0);
            break;
        case (win_0.includes(3) && win_0.includes(4) && win_0.includes(5)):
            dibujar_ganador(3, 4, 5, 4, 0);
            break;
        case (win_0.includes(6) && win_0.includes(7) && win_0.includes(8)):
            dibujar_ganador(6, 7, 8, 4, 0);
            break;
        case (win_0.includes(0) && win_0.includes(3) && win_0.includes(6)):
            dibujar_ganador(0, 3, 6, 2, 0);
            break;
        case (win_0.includes(1) && win_0.includes(4) && win_0.includes(7)):
            dibujar_ganador(1, 4, 7, 2, 0);
            break;
        case (win_0.includes(2) && win_0.includes(5) && win_0.includes(8)):
            dibujar_ganador(2, 5, 8, 2, 0);
            break;
        case (win_0.includes(0) && win_0.includes(4) && win_0.includes(8)):
            dibujar_ganador(0, 4, 8, 1, 0);
            break;
        case (win_0.includes(2) && win_0.includes(4) && win_0.includes(6)):
            dibujar_ganador(2, 4, 6, 3, 0);
            break;
    }
}

const dibujar_ganador = (n1, n2, n3, dib, X_0) => {
    document.getElementById(`${n1}_caja`).style.background = `url(img/${dib}.png)`;
    document.getElementById(`${n2}_caja`).style.background = `url(img/${dib}.png)`;
    document.getElementById(`${n3}_caja`).style.background = `url(img/${dib}.png)`;
    limpiar();
    (X_0 === "X") ?
    (document.getElementById("fin").innerHTML = "¡¡Has ganado, Felicitaciones!!",
        document.getElementById("hum_cont").innerHTML = ++puntos_humano) :
    (document.getElementById("fin").innerHTML = "¡¡Has perdido, como siempre!!",
        document.getElementById("ia_cont").innerHTML = ++puntos_ia);
}

const limpiar = () => {
    casillas_vasias.length = 0;
    win_0.length = 0;
    win_X.length = 0;
}

const dibujar_X = (carta, carta_id) => {
    paso = 0;
    document.getElementById(carta.id).style.background = "url('img/x.png')";
    removeItemFromArr(casillas_vasias, carta_id)
    win_X.push(carta_id);
    ganador();
    setTimeout(dibujar_0, 1000);
}

// eliminamos item del array(casillas vasias)
const removeItemFromArr = (array, item) => array.splice(array.indexOf(item), 1);
// indexOf devuelve el índice, en que esta el objeto buscado 

const dibujar_0 = () => {
    if (casillas_vasias.length === 4) document.getElementById("fin").innerHTML = "esto se pone complicado...";
    switch (true) {
        case (casillas_vasias.includes(4)):
            calcularPaso(4);
            break;
        case (win_X.includes(4) && casillas_vasias.includes(0) && casillas_vasias.includes(2) 
                && casillas_vasias.includes(6) && casillas_vasias.includes(8)):
            let ar = [0, 2, 6, 8];
            let num_aler =  Math.floor(Math.random() * ar.length);
            calcularPaso(ar[num_aler]);
            break;
        case (win_0.includes(4) && win_0.includes(0) && casillas_vasias.includes(8)):
            calcularPaso(8);
            break;
        case (win_0.includes(4) && win_0.includes(8) && casillas_vasias.includes(0)):
            calcularPaso(0);
            break;
        case (win_0.includes(4) && win_0.includes(2) && casillas_vasias.includes(6)):
            calcularPaso(6);
            break;
        case (win_0.includes(4) && win_0.includes(6) && casillas_vasias.includes(2)):
            calcularPaso(2);
            break;
        case (win_0.includes(0) && win_0.includes(6) && casillas_vasias.includes(3)):
            calcularPaso(3);
            break;
        case (win_0.includes(3) && win_0.includes(6) && casillas_vasias.includes(0)):
            calcularPaso(0);
            break;
        case (win_0.includes(0) && win_0.includes(3) && casillas_vasias.includes(6)):
            calcularPaso(6);
            break;
        case (win_0.includes(1) && win_0.includes(4) && casillas_vasias.includes(7)):
            calcularPaso(7);
            break;
        case (win_0.includes(7) && win_0.includes(4) && casillas_vasias.includes(1)):
            calcularPaso(1);
            break;
        case (win_0.includes(2) && win_0.includes(8) && casillas_vasias.includes(5)):
            calcularPaso(5);
            break;
        case (win_0.includes(8) && win_0.includes(5) && casillas_vasias.includes(2)):
            calcularPaso(7);
            break;
        case (win_0.includes(2) && win_0.includes(5) && casillas_vasias.includes(8)):
            calcularPaso(8);
            break;
        case (win_0.includes(0) && win_0.includes(2) && casillas_vasias.includes(1)):
            calcularPaso(1);
            break;
        case (win_0.includes(1) && win_0.includes(2) && casillas_vasias.includes(0)):
            calcularPaso(0);
            break;
        case (win_0.includes(0) && win_0.includes(1) && casillas_vasias.includes(2)):
            calcularPaso(2);
            break;
        case (win_0.includes(4) && win_0.includes(5) && casillas_vasias.includes(3)):
            calcularPaso(3);
            break;
        case (win_0.includes(4) && win_0.includes(3) && casillas_vasias.includes(5)):
            calcularPaso(5);
            break;
        case (win_0.includes(6) && win_0.includes(8) && casillas_vasias.includes(7)):
            calcularPaso(7);
            break;
        case (win_0.includes(7) && win_0.includes(8) && casillas_vasias.includes(6)):
            calcularPaso(6);
            break;
        case (win_0.includes(6) && win_0.includes(7) && casillas_vasias.includes(8)):
            calcularPaso(8);
            break;
/* **************************************** los de X ************************************************* */
        case (win_X.includes(2) && win_X.includes(8) && casillas_vasias.includes(5)):
            calcularPaso(5);
            break;
        case (win_X.includes(2) && win_X.includes(0) && casillas_vasias.includes(1)):
            calcularPaso(1);
            break;
        case (win_X.includes(6) && win_X.includes(0) && casillas_vasias.includes(3)):
            calcularPaso(3);
            break;
        case (win_X.includes(6) && win_X.includes(8) && casillas_vasias.includes(7)):
            calcularPaso(7);
            break;
        case (win_X.includes(4) && win_X.includes(6) && casillas_vasias.includes(2)):
            calcularPaso(2);
            break;
        case (win_X.includes(4) && win_X.includes(2) && casillas_vasias.includes(6)):
            calcularPaso(6);
            break;
        case (win_X.includes(0) && win_X.includes(4) && casillas_vasias.includes(8)):
            calcularPaso(8);
            break;
        case (win_X.includes(4) && win_X.includes(8) && casillas_vasias.includes(0)):
            calcularPaso(0);
            break;
        case (win_X.includes(0) && win_X.includes(2) && casillas_vasias.includes(1)):
            calcularPaso(1);
            break;
        case (win_X.includes(1) && win_X.includes(2) && casillas_vasias.includes(0)):
            calcularPaso(0);
            break;
        case (win_X.includes(0) && win_X.includes(1) && casillas_vasias.includes(2)):
            calcularPaso(2);
            break;
        case (win_X.includes(6) && win_X.includes(7) && casillas_vasias.includes(8)):
            calcularPaso(8);
            break;
        case (win_X.includes(8) && win_X.includes(7) && casillas_vasias.includes(6)):
            calcularPaso(6);
            break;
        case (win_X.includes(6) && win_X.includes(8) && casillas_vasias.includes(7)):
            calcularPaso(7);
            break;
        case (win_X.includes(2) && win_X.includes(8) && casillas_vasias.includes(5)):
            calcularPaso(5);
            break;
        case (win_X.includes(5) && win_X.includes(8) && casillas_vasias.includes(2)):
            calcularPaso(2);
            break;
        case (win_X.includes(5) && win_X.includes(2) && casillas_vasias.includes(8)):
            calcularPaso(8);
            break;
        case (win_X.includes(0) && win_X.includes(6) && casillas_vasias.includes(3)):
            calcularPaso(3);
            break;
        case (win_X.includes(3) && win_X.includes(6) && casillas_vasias.includes(0)):
            calcularPaso(0);
            break;
        case (win_X.includes(0) && win_X.includes(3) && casillas_vasias.includes(6)):
            calcularPaso(6);
            break;
        case (win_X.includes(4) && win_X.includes(7) && casillas_vasias.includes(1)):
            calcularPaso(1);
            break;
        case (win_X.includes(1) && win_X.includes(4) && casillas_vasias.includes(7)):
            calcularPaso(7);
            break;
        case (win_X.includes(4) && win_X.includes(5) && casillas_vasias.includes(3)):
            calcularPaso(3);
            break;
        case (win_X.includes(4) && win_X.includes(3) && casillas_vasias.includes(5)):
            calcularPaso(5);
            break;
        default:
            let aleratorio = -1;
            while (!(casillas_vasias.includes(aleratorio)) && casillas_vasias.length !== 0)
                aleratorio = Math.floor(Math.random() * 9); // vemos si el numero esta en el array.
            if (casillas_vasias.length !== 0) {
                document.getElementById(`${aleratorio}_caja`).style.background = "url('img/0.png')";
                removeItemFromArr(casillas_vasias, aleratorio);
                win_0.push(aleratorio);
                ganador();
            }
            break;
    }
    paso = 1;
}

const calcularPaso = (paso_ia) => {
    document.getElementById(`${paso_ia}_caja`).style.background = "url('img/0.png')";
    removeItemFromArr(casillas_vasias, paso_ia);
    win_0.push(paso_ia);
    ganador();
}

newBoard();