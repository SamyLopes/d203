
/*const quadrado = document.querySelector('.quadrado');

const mostrarQuadrado = function () {
    quadrado.classList.toggle('visivel')
}*/


//quadrado.onmouseover = mostrarQuadrado;

/* quadrado.onmouseover = const mostrarQuadrado = function () {
    quadrado.classList.toggle('visivel')
} ESSE É OUTRO JEITO DE FAZER!!!!!! */



/*
const imgPudim = document.querySelector('img');

const mostrarImagem = function () {
    quadrado.classList.toggle('visivel');
}

const destaqueQuadrado = function () {
    imgPudim.classList.toggle('destaque');
}

imgPudim.onmouseenter = destaqueQuadrado;
imgPudim.onmouseout = destaqueQuadrado;
*/
/*quadrado.onmouseenter = mostrarQuadrado;
quadrado.onmouseout = mostrarQuadrado;  OUTRA MANEIRA DE FAZEEERRR!!!! mas aqui vai aparecer o quadrado só quando eu estiver com o mouse em cima, quando eu tirar o quadrado some, diferente da primeira maneira que aparece quando eu coloco em cima, se eu tiro não some, só some quando eu escosto de novo*/


const hamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-menu-hamburguer');

const mostrar = function () {
    nav.classList.toggle('d-flex')
}

hamburguer.onclick = mostrar